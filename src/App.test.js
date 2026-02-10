import { render, screen } from '@testing-library/react';
import App from './App';
import Sum from './component/Sum';

// test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});

test("Check addition of two numbers",()=>{
  render(<Sum/>);
  expect(sum(10,20)).toBe(30);
});


import React from 'react'

const Sum = (a,b) => {
    return a+b;
  
}

export default Sum

