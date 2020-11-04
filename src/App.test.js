import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Chip from './components/Chip';
import ChipContainer from './components/ChipContainer';
import QuoteBtn from './components/GetQuoteBtn';


describe('"Get Quote" button', () => {
  test('is clicked, Modal component is visible', () => { 
    render(<ChipContainer />);

    const getQuoteBtn = screen.getByRole('button', { name: /get quote/i }); 
    const modal = screen.getByRole('complementary');
    screen.debug(getQuoteBtn);

    userEvent.click(getQuoteBtn, disable="false")
    expect(modal).toHaveClass('open-modal');
  })
});
