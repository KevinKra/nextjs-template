import StatusBar from ".";
import { render, screen, within } from "../../../test-utils";

describe("StatusBar", () => {
  test("it loads", () => {
    render(<StatusBar title="test" value={15} variant="success" />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/15/i)).toBeInTheDocument();
    expect(screen.getByRole(/progressbar/i)).toBeInTheDocument();
  });

  it("renders a success version", () => {
    render(<StatusBar title="test" value={15} variant="success" />);
    expect(screen.getByRole(/progressbar/i)).toHaveClass(
      "MuiLinearProgress-colorSuccess"
    );
  });

  it("renders an error version", () => {
    render(<StatusBar title="test" value={15} variant="error" />);
    expect(screen.getByRole(/progressbar/i)).toHaveClass(
      "MuiLinearProgress-colorError"
    );
  });

  it("renders a loading version", () => {
    render(
      <StatusBar title="test" value={15} variant="success" loading={true} />
    );
    expect(screen.getByTestId(/statusBar-loading/i)).toBeInTheDocument();
  });
});
