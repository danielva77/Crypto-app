import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home.jsx';

describe('Home', () => {

  it('renders section 1', () => {
    const { getByTestId } = render(<BrowserRouter>
      <Home />
    </BrowserRouter>);
    const section1 = getByTestId('section-1');
    expect(section1).toBeInTheDocument();
  });

  it('renders section 2', () => {
    const { getByTestId } = render(<BrowserRouter>
      <Home />
    </BrowserRouter>);
    const section2 = getByTestId('section-2');
    expect(section2).toBeInTheDocument();
  });

  it('renders section 3', () => {
    const { getByTestId } = render(<BrowserRouter>
      <Home />
    </BrowserRouter>);
    const section3 = getByTestId('section-3');
    expect(section3).toBeInTheDocument();
  });
});