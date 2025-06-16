import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [holdings, setHoldings] = useState([]);
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/allHoldings`);
        setHoldings(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };

    fetchHoldings();
  }, []);

  const handleBuyClick = async () => {
    try {
      await axios.post(`${API_BASE_URL}/api/v1/orders/newOrder`, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });
      
      // Trigger orders refresh immediately after successful buy
      window.dispatchEvent(new Event('refreshOrders'));
      
      closeBuyWindow();
    } catch (err) {
      console.error("Buy Error:", err);
      alert("Buy failed. See console for error.");
    }
  };

  const handleSellClick = async () => {
    try {
      const userStock = holdings.find((h) => h.name === uid);

      if (!userStock || Number(stockQuantity) > userStock.qty) {
        alert("Insufficient quantity to sell!");
        return;
      }

      await axios.post(`${API_BASE_URL}/api/v1/orders/newOrder`, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });
      
      // Trigger orders refresh immediately after successful sell
      window.dispatchEvent(new Event('refreshOrders'));
      
      closeBuyWindow();
    } catch (err) {
      console.error("Sell Error:", err);
      alert("Sell failed. See console for error.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required $1,760</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;