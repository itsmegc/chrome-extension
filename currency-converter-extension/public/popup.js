import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [conversionRate, setConversionRate] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        setCurrencies([...Object.keys(response.data.rates)]);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        setConversionRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
      }
    };
    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    if (conversionRate) {
      setResult(amount * conversionRate);
    }
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {result && (
        <div className="result">
          <h3>
            {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
          </h3>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<CurrencyConverter />, document.getElementById('root'));
