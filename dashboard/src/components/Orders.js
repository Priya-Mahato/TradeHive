import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Listen for custom refresh event from trading component
  useEffect(() => {
    const handleOrderRefresh = () => {
      fetchOrders();
    };

    // Add event listener for custom refresh event
    window.addEventListener('refreshOrders', handleOrderRefresh);
    
    // Cleanup
    return () => {
      window.removeEventListener('refreshOrders', handleOrderRefresh);
    };
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/orders/orders`);
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Action</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td className={order.mode === 'BUY' ? 'buy' : 'sell'}>
                  {order.mode}
                </td>
                <td>{order.qty}</td>
                <td>${order.price}</td>
                <td>{order.status || 'Completed'}</td>
                <td>{new Date(order.createdAt || Date.now()).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;