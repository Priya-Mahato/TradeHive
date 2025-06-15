// backend/services/finnhubService.js
const axios = require('axios');

class FinnhubService {
  constructor() {
    this.apiKey = process.env.FINNHUB_API_KEY;
    this.baseURL = 'https://finnhub.io/api/v1';
  }

  // Get real-time quote for a symbol
  async getQuote(symbol) {
    try {
      const response = await axios.get(`${this.baseURL}/quote`, {
        params: {
          symbol: symbol.toUpperCase(),
          token: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching quote:', error);
      throw error;
    }
  }

  // Get company profile
  async getCompanyProfile(symbol) {
    try {
      const response = await axios.get(`${this.baseURL}/stock/profile2`, {
        params: {
          symbol: symbol.toUpperCase(),
          token: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching company profile:', error);
      throw error;
    }
  }

  // Get market news
  async getMarketNews(category = 'general') {
    try {
      const response = await axios.get(`${this.baseURL}/news`, {
        params: {
          category: category,
          token: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching market news:', error);
      throw error;
    }
  }

  // Get stock candles (historical data)
  async getCandles(symbol, resolution = 'D', from, to) {
    try {
      const response = await axios.get(`${this.baseURL}/stock/candle`, {
        params: {
          symbol: symbol.toUpperCase(),
          resolution: resolution,
          from: from,
          to: to,
          token: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching candles:', error);
      throw error;
    }
  }

  // Search for stocks
  async searchStocks(query) {
    try {
      const response = await axios.get(`${this.baseURL}/search`, {
        params: {
          q: query,
          token: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching stocks:', error);
      throw error;
    }
  }
}

module.exports = new FinnhubService();