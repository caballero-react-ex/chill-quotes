import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer'; 

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
  });
}); 
