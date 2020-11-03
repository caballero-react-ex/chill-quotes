import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Footer from './components/Footer';
import Chip from './components/Chip';
import ChipContainer from './components/ChipContainer';



describe('Footer', () => {
  render(<Footer />);
  const linkProject = screen.getByRole('link', { name: /about/i });
  const linkPortfolio = screen.getByRole('link', { name: /caballero/i });

  test('renders footer links', () => {
    expect(linkProject).toBeInTheDocument();
    expect(linkPortfolio).toBeInTheDocument();
  });
  
  test('and take you to the right www-address', () => {
    userEvent.click(linkProject);
    expect(
      linkProject.closest('a')
    ).toHaveAttribute('href', 'https://github.com/caballero-react-ex/chill-quotes');

    userEvent.click(linkPortfolio);
    expect(
      linkPortfolio.closest('a')
    ).toHaveAttribute('href', 'https://www.luiscaballero.dev');
  })
})

describe('Thema button', () => {
  function setup() {
    const utils =  render(<ChipContainer />);
    const themaButton = screen.getByRole('button', { name: /love/i });
    return {
      ...utils, 
      themaButton
    }
  }
 
  test('is rendered', () => {
    const { themaButton } = setup()
    expect(themaButton).toBeInTheDocument();
  });

  test('when clicked is selected', () => {
    const { themaButton } = setup()
    userEvent.click(themaButton);
    expect(themaButton).toHaveClass('Chip-isActive');  
  });

  test('when clicked Get Quote Button is NOT disabled', () => {
    const { themaButton } = setup()
    const getQuoteBtn = screen.getByRole('button', { name: /get quote/i }); 
    userEvent.click(themaButton);
    expect(getQuoteBtn).not.toHaveAttribute('disabled');
  });
})

