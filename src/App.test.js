import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('Footer', () => {
  //const { getByRole } = render(<App />);
  render(<App />);
  const linkProject = screen.getByRole('link', { name: /about chillquotes/i });
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

  //screen.debug(linkProject);
})

// screen.getByRole('link', { name: /how it works/i });
//expect(screen.getByText('Click Me').closest('a')).toHaveAttribute('href', 'https://www.test.com/')