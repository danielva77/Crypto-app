import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, useParams } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Transacciones from '../Components/Transacciones/Transacciones';

describe('Transacciones', () => {
  let crypto;
  beforeEach(() => {
    crypto = [
      {
        name: 'Bitcoin',
        symbol: 'btc',
        current_price: 10000,
      },
      {
        name: 'Ethereum',
        symbol: 'eth',
        current_price: 2000,
      },
    ];
  });

  it('should render without crashing', () => {
    render(<BrowserRouter><Transacciones /></BrowserRouter>);
  });

  it('should display "Agregar una transaccion" button', () => {
    render(<BrowserRouter><Transacciones /></BrowserRouter>);
    expect(screen.getByTestId('add-transaction-button')).toBeInTheDocument();
  });
});