import UnitSnapshot from ".";
import { render, screen, within } from "../../../test-utils";

describe("UnitSnapshot", () => {
  it("renders a success version", () => {
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
    expect(screen.getByText(/abcd-1234-efgh-5678/i)).toBeInTheDocument();
    expect(screen.getByText(/systems optimal/i)).toBeInTheDocument();
    expect(screen.getAllByRole("progressbar")).toHaveLength(3);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.queryByTestId(/AlertTab/i)).not.toBeInTheDocument();
  });

  it("renders an error version", () => {
    render(
      <UnitSnapshot
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 79, status: "error" }}
        pressure={{ type: "pressure", value: 85, status: "success" }}
        inError={true}
      />
    );
    expect(screen.getByText(/unit #1/i)).toBeInTheDocument();
    expect(screen.getByText(/abcd-1234-efgh-5678/i)).toBeInTheDocument();
    expect(screen.getByText(/systems suboptimal/i)).toBeInTheDocument();
    expect(screen.getAllByRole("progressbar")).toHaveLength(3);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId(/AlertTab/i)).toBeInTheDocument();
  });

  it("renders a loading version", () => {
    render(
      <UnitSnapshot
        loading={true}
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 79, status: "success" }}
        pressure={{ type: "pressure", value: 85, status: "success" }}
        inError={false}
      />
    );
    expect(
      screen.getAllByTestId(/statusBar-loading/i).length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/unit #1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/abcd-1234-efgh-5678/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/systems suboptimal/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole("progressbar")).not.toHaveLength(3);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByTestId(/AlertTab/i)).not.toBeInTheDocument();
  });

  it("doesn't show Error AlertTab if loading", () => {
    render(
      <UnitSnapshot
        loading={true}
        inError={true}
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 79, status: "success" }}
        pressure={{ type: "pressure", value: 85, status: "success" }}
      />
    );
    expect(
      screen.getAllByTestId(/statusBar-loading/i).length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.queryByTestId(/AlertTab/i)).not.toBeInTheDocument();
  });
});
