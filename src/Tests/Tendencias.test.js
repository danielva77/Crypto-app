import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Tendencias from '../Components/Tendencias/Tendencias';

describe('Tendencias', () => {
  it('should render without crashing', () => {
    render(<BrowserRouter><Tendencias trend={[]} price_btc_usd={50000} /></BrowserRouter>);
  });
});

describe('Tendencias', () => {
  it('should render trend items', () => {
    const trend = [
      {
        item: {
          coin_id: 1,
          id: 1,
          name: 'Bitcoin',
          small: 'https://example.com/bitcoin.jpg',
          price_btc: 1.0
        }
      },
      {
        item: {
          coin_id: 2,
          id: 2,
          name: 'Ethereum',
          small: 'https://example.com/ethereum.jpg',
          price_btc: 0.05
        }
      }
    ];

    const { getByText } = render(<BrowserRouter><Tendencias trend={trend} price_btc_usd={50000} /></BrowserRouter>);

    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('Ethereum')).toBeInTheDocument();
  });
});


describe('Tendencias', () => {
  it('should render price in USD', () => {
    const trend = [
      {
        item: {
          coin_id: 1,
          id: 1,
          name: 'Bitcoin',
          small: 'https://example.com/bitcoin.jpg',
          price_btc: 1.0
        }
      }
    ];

    const { getByText } = render(<BrowserRouter><Tendencias trend={trend} price_btc_usd={50000} /></BrowserRouter>);

    expect(getByText('US$ 50,000')).toBeInTheDocument();
  });
});