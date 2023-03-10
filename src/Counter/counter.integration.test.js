import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

beforeEach(() => {
  render(<Counter />);
});

describe("Probar el correcto funcionamiento del contador", () =>  {
  test("Debe aumentar el contador a 1, luego de hacer click en 'Incrementar'", () => {
    const button = screen.getByRole("button", { name: /incrementar/i});
    fireEvent.click(button);
    expect(screen.getByText(/contador: 1/i)).toBeInTheDocument();
  });

  test("El contador debe decrementar en 1, luego de hacer click en 'Decrementar'", () => {
    const button = screen.getByRole("button", { name: /decrementar/i});
    fireEvent.click(button);
    expect(screen.getByText(/contador: -1/i)).toBeInTheDocument();
  })

  test("El contador debe reiniciar a 0, luego de hacer click en 'Reiniciar'", () => {
    const buttonAdd = screen.getByRole("button", { name: /incrementar/i});
    fireEvent.click(buttonAdd);
    
    const buttonReset = screen.getByRole("button", { name: /reiniciar/i});
    fireEvent.click(buttonReset);
    
    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();

    const buttonSubtract = screen.getByRole("button", { name: /incrementar/i});
    fireEvent.click(buttonSubtract);
    
  })
})