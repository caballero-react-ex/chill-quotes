import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChipContainer from './ChipContainer';
import QuoteBtn from './GetQuoteBtn';
import { showElement } from './utils/Utils';


describe('"Get Quote" button', () => {
  test('when clicked, Modal component is visible', () => { 
    render(<QuoteBtn onHandleClickGet={() => showElement(modal)} onDisabled={false}/>);
    const getQuoteBtn = screen.getByText(/get/i);

    render(<ChipContainer />);
    const modal = screen.getByRole('complementary');
    userEvent.click(getQuoteBtn)
    expect(modal).toBeVisible();
  })
});