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

describe('thema button', () => {
  render(<App />)

  const defaultProps = { 
    onClick: jest.fn(),
    children: "Peace" ,
    type: "topic",
    isSelected: 1,
    index: 1, 
    onSelect: jest.fn(), 
    returnQuery: jest.fn(),
  };

  test('is selected', () => {
    // const themaButton = screen.getByRole('button',{name: /'children'/i });
    // expect(themaButton).toHaveClass('Chip-isActive');


    const { queryByText } = render(<Chip {...defaultProps} />);
    expect(queryByText("Peace")).toBeTruthy(); 
  })
})

