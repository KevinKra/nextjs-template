import UnitSnapshot from ".";
import { render, screen } from "../../../test-utils";

describe("UnitSnapshot", () => {
  test("it loads", () => {
    render(
      <UnitSnapshot
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 79, status: "success" }}
        pressure={{ type: "pressure", value: 85, status: "success" }}
        inError={false}
      />
    );
    expect(screen.getByText(/unit #1/i)).toBeInTheDocument();
  });
});
