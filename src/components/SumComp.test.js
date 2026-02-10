import SumComp from "./SumComp.JS";
test("addition of two numbers", () => {
    const result = SumComp(10, 20);
    expect(result).toBe(30);
});

// import { render, screen } from '@testing-library/react';
// import GreetComp from "./GreetComp";
// import '@testing-library/jest-dom';

// test('checks if "Good Afternoon All My Dear Friends" text is available', () => {
//   render(<GreetComp />);

//   const textElement = screen.getByText(/Good Afternoon All My Dear Friends/i);

//   expect(textElement).toBeInTheDocument();
// });
