import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App'; 

// Group 1: Basic UI Checks (4 tests)
describe("Specific UI Elements in App", () => {

  test("renders the username input field using placeholder", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/enter user name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders the cow image using title", () => {
    render(<App />);
    const imageElement = screen.getByTitle(/AI generated image/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'C:\\Vs_coding\\Work_File\\src\\shared\\images\\cow.jpg');
  });

  test('textbox testing', () => {
    render(<App/>);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    const checkplaceholder = screen.getByPlaceholderText(/enter user name/i);
    expect(checkplaceholder).toBeInTheDocument();
  });

  test("Test Case for input box", () => {
    render(<App/>);
    const chekInput = screen.getByRole("textbox");
    expect(chekInput).toBeInTheDocument();
    const checkInputPlaceholder = screen.getByPlaceholderText("enter user name");
    expect(checkInputPlaceholder).toBeInTheDocument();
  });
});


// Group 2 & 3 & 4: Attribute Checks using Nested Describe (7 tests)
describe("UI test case group", () => {
    test("test case 1", () => {
        render(<App />);
        const checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username"); // Note: lowercase 'u' here
    });
    test("test case 2", () => {
        render(<App />);
        const checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username");
    });
    test("test case 3", () => {
        render(<App />);
        const checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username");
    });

    describe("API test case group", () => {
        test("test case 4", () => {
            render(<App />);
            const checkInput = screen.getByRole("textbox");
            expect(checkInput).toHaveAttribute("name", "username");
        });
        test("test case 5", () => {
            render(<App />);
            const checkInput = screen.getByRole("textbox");
            expect(checkInput).toHaveAttribute("name", "username");
        });
        test("test case 6", () => {
            render(<App />);
            const checkInput = screen.getByRole("textbox");
            expect(checkInput).toHaveAttribute("name", "username");
        });

        describe("Nested UI test case group", () => { 
            test("nested test case", () => {
            render(<App />);
            const checkInput = screen.getByRole("textbox");
            expect(checkInput).toHaveAttribute("name", "username");
        });
        });
    });
}); 