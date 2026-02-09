
test("click event test case",()=>{
  render(<App/>);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
})