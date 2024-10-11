import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like "toBeInTheDocument"
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
  test('renders with default greeting and name', () => {
    render(<HelloWorld />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders with custom greeting and name', () => {
    render(<HelloWorld greeting="Hi" name="Mateshwari" />);
    const headingElement = screen.getByText(/Hi, Mateshwari!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
