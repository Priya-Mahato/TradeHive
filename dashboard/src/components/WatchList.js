//WatchList.js
import "./WatchList.css";

import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Add,
  Delete,
  Refresh,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newSymbol, setNewSymbol] = useState("");
  const [symbols, setSymbols] = useState(["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN", "META", "NFLX", "NVDA"]);

  // Backend URL - make this configurable
  const BACKEND_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

  // Test backend connection
  const testBackendConnection = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/test`);
      console.log("Backend connected:", response.data);
      return true;
    } catch (err) {
      console.error("Backend connection failed:", err);
      setError(`Cannot connect to backend server at ${BACKEND_URL}. Please make sure the server is running.`);
      return false;
    }
  }, [BACKEND_URL]);

  // Fetch quotes for all symbols in watchlist
  const fetchWatchlistData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    // First test backend connection
    const isConnected = await testBackendConnection();
    if (!isConnected) {
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/stocks/quotes`, {
        // symbols: symbols 
        symbols
      }, {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // Transform data to match your existing structure
      const transformedData = response.data.map(stock => ({
        name: stock.symbol,
        price: stock.c?.toFixed(2) || "0.00",
        percent: stock.dp ? `${stock.dp.toFixed(2)}%` : "0.00%",
        isDown: stock.d < 0,
        change: stock.d?.toFixed(2) || "0.00",
        high: stock.h?.toFixed(2) || "0.00",
        low: stock.l?.toFixed(2) || "0.00",
        prevClose: stock.pc?.toFixed(2) || "0.00",
        rawPrice: stock.c || 0,
        rawPercent: stock.dp || 0,
        error: stock.error
      }));
      
      setWatchlistData(transformedData);
    } catch (err) {
      console.error("Watchlist fetch error:", err);
      if (err.code === 'ERR_NETWORK') {
        setError(`Network Error: Cannot reach backend server at ${BACKEND_URL}. Please check if the server is running.`);
      } else if (err.code === 'ECONNABORTED') {
        setError("Request timeout. The server is taking too long to respond.");
      } else {
        setError(`Failed to fetch watchlist data: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  }, [BACKEND_URL, symbols, testBackendConnection]);

  // Add new symbol to watchlist
  const addSymbol = async () => {
    if (!newSymbol.trim()) return;
    
    const upperSymbol = newSymbol.toUpperCase().trim();
    if (symbols.includes(upperSymbol)) {
      alert("Symbol already in watchlist");
      return;
    }

    try {
      setLoading(true);
      // Test if symbol exists by fetching its quote
      await axios.get(`${BACKEND_URL}/api/v1/stocks/quote/${upperSymbol}`, {
        timeout: 5000
      });
      
      setSymbols([...symbols, upperSymbol]);
      setNewSymbol("");
    } catch (err) {
      if (err.code === 'ERR_NETWORK') {
        alert("Network Error: Cannot reach server. Please check your connection.");
      } else {
        alert("Invalid symbol or API error");
      }
    } finally {
      setLoading(false);
    }
  };

  // Remove symbol from watchlist
  const removeSymbol = (symbolToRemove) => {
    setSymbols(symbols.filter(symbol => symbol !== symbolToRemove));
  };

  useEffect(() => {
    fetchWatchlistData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchWatchlistData, 30000);
    return () => clearInterval(interval);
  }, [fetchWatchlistData]);

  // Prepare data for DoughnutChart
  const labels = watchlistData.map((stock) => stock.name);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlistData.map((stock) => stock.rawPrice),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 192, 203, 0.5)",
          "rgba(128, 0, 128, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 192, 203, 1)",
          "rgba(128, 0, 128, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Add stock symbol (e.g., AAPL, GOOGL)"
          className="search"
          value={newSymbol}
          onChange={(e) => setNewSymbol(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addSymbol()}
        />
        <button 
          onClick={addSymbol} 
          disabled={loading}
          className="add-btn"
          title="Add Symbol"
        >
          <Add />
        </button>
        <button 
          onClick={fetchWatchlistData} 
          disabled={loading}
          className="refresh-btn"
          title="Refresh Data"
        >
          <Refresh />
        </button>
        <span className="counts">
          {loading ? "Loading..." : `${watchlistData.length} / 50`}
        </span>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <ul className="list">
        {loading && watchlistData.length === 0 ? (
          <li className="loading-item">Loading watchlist...</li>
        ) : (
          watchlistData.map((stock, index) => {
            return (
              <WatchListItem 
                stock={stock} 
                key={index} 
                onRemove={() => removeSymbol(stock.name)}
              />
            );
          })
        )}
      </ul>

      {watchlistData.length > 0 && <DoughnutChart data={chartData} />}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onRemove }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <div className="stock-info">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          {stock.error && <span className="error-badge">Error</span>}
        </div>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">${stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions 
          uid={stock.name} 
          onRemove={onRemove}
          stockData={stock}
        />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, onRemove, stockData }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleRemoveClick = () => {
    if (window.confirm(`Remove ${uid} from watchlist?`)) {
      onRemove();
    }
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip 
          title="Remove from Watchlist" 
          placement="top" 
          arrow 
          TransitionComponent={Grow}
        >
          <button className="action remove" onClick={handleRemoveClick}>
            <Delete className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};