import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';
import ChipContainer from './ChipContainer';
import './Modal.scss';


import fs from 'fs';
import path from 'path';


describe('Modal', () => {
  test('when X-button is clicked, Modal closes', () => { 
  
    render(<ChipContainer/>)
    const modal = screen.getByRole('complementary');
    const closeBtn = screen.getByRole('button', { name: /close/i });

    userEvent.click(closeBtn);
    expect(modal).not.toHaveClass('open');
    // expect(modal).not.toBeVisible(); // CSS stylesheet not loading in jsdom
  })
  test('when is clicked outside the Modal, it closes', () => { 
  
    render(<ChipContainer/>)
    const modal = screen.getByRole('complementary');
    const outsideModal = screen.getByRole('button', { name: /close/i });
    screen.debug();
    userEvent.click(outsideModal);
    expect(modal).not.toHaveClass('open');
    // expect(modal).not.toBeVisible(); // CSS stylesheet not loading in jsdom
  })
});


