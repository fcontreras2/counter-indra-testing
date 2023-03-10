import { render, screen } from "@testing-library/react";
import Counter from ".";

describe("Pruebas unitarias de mi contador", () => {
  test("Verificar el título de la página", () => {
    render(<Counter />);
    expect(screen.getByText(/app counter/i)).toBeInTheDocument();
  });

  test("Verificar si existe el botón 'Incrementar'", () => {
    render(<Counter />);
    expect(
      screen.getByRole("button", { name: /incrementar/i })
    ).toBeInTheDocument();
  });

  test("Verificar si existe el botón 'Decrementar'", () => {
    render(<Counter />);
    expect(
      screen.getByRole("button", { name: /decrementar/i })
    ).toBeInTheDocument();
  });

  test("Verificar si existe el botón 'Reiniciar'", () => {
    render(<Counter />);
    expect(
      screen.getByRole("button", { name: /reiniciar/i })
    ).toBeInTheDocument();
  });

  test("Verificar que el contador se encuentre en cero (0)", () => {
    render(<Counter />);
    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();
  });
});
