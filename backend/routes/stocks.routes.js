// backend/routes/stocks.routes.js
const express = require('express');
const router = express.Router();
const finnhubService = require('../services/finnhubService');

// Get stock quote
router.get('/quote/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const quote = await finnhubService.getQuote(symbol);
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock quote' });
  }
});

// Get company profile
router.get('/profile/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const profile = await finnhubService.getCompanyProfile(symbol);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch company profile' });
  }
});

// Get market news
router.get('/news/:category?', async (req, res) => {
  try {
    const { category } = req.params;
    const news = await finnhubService.getMarketNews(category);
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market news' });
  }
});

// Get historical data (candles)
router.get('/candles/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const { resolution = 'D', from, to } = req.query;
    
    // Default to last 30 days if no dates provided
    const toDate = to ? parseInt(to) : Math.floor(Date.now() / 1000);
    const fromDate = from ? parseInt(from) : toDate - (30 * 24 * 60 * 60);
    
    const candles = await finnhubService.getCandles(symbol, resolution, fromDate, toDate);
    res.json(candles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch historical data' });
  }
});

// Search stocks
router.get('/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const results = await finnhubService.searchStocks(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search stocks' });
  }
});

// Get multiple quotes (for watchlist)
router.post('/quotes', async (req, res) => {
  try {
    const { symbols } = req.body;
    
    if (!symbols || !Array.isArray(symbols)) {
      return res.status(400).json({ error: 'Symbols array is required' });
    }

    const quotes = await Promise.all(
      symbols.map(async (symbol) => {
        try {
          const quote = await finnhubService.getQuote(symbol);
          return { symbol, ...quote };
        } catch (error) {
          return { symbol, error: 'Failed to fetch' };
        }
      })
    );

    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch multiple quotes' });
  }
});

module.exports = router;
