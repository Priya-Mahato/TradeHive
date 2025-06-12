import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3" style={{ fontWeight: 'bold' }}>
          Open a TradeHive account
        </h1>
        <p className="mb-4" style={{ color: '#6c757d' }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: '15%', margin: '0 auto' }}
          onClick={handleSignUpClick} 
        >
          Register now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
