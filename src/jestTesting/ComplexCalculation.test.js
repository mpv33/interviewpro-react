import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like "toBeInTheDocument"
import ComplexCalculation from './ComplexCalculation';


describe('ComplexCalculation Component', () => {
  
  test('renders with default multiplier and input of 0', () => {
    render(<ComplexCalculation multiplier={5} />);
    
    const resultElement = screen.getByText(/Result: 0/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('calculates and displays the correct result based on multiplier and input', () => {
    render(<ComplexCalculation multiplier={5} />);
    
    const inputElement = screen.getByLabelText('calculation-input');
    fireEvent.change(inputElement, { target: { value: '3' } });
    
    const resultElement = screen.getByText(/Result: 15/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('handles different multiplier values correctly', () => {
    render(<ComplexCalculation multiplier={10} />);
    
    const inputElement = screen.getByLabelText('calculation-input');
    fireEvent.change(inputElement, { target: { value: '2' } });
    
    const resultElement = screen.getByText(/Result: 20/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('handles non-numeric input gracefully by defaulting to 0', () => {
    render(<ComplexCalculation multiplier={5} />);
    
    const inputElement = screen.getByLabelText('calculation-input');
    fireEvent.change(inputElement, { target: { value: 'abc' } });
    
    const resultElement = screen.getByText(/Result: 0/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('handles negative numbers correctly', () => {
    render(<ComplexCalculation multiplier={4} />);
    
    const inputElement = screen.getByLabelText('calculation-input');
    fireEvent.change(inputElement, { target: { value: '-3' } });
    
    const resultElement = screen.getByText(/Result: -12/i); 
    expect(resultElement).toBeInTheDocument();
  });

  test('renders snapshot correctly', () => {
    const { asFragment } = render(<ComplexCalculation multiplier={2} />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
