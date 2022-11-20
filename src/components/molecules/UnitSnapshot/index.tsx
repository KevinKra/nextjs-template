import React from "react";
import { Button, Icon, Paper, styled, Typography } from "@mui/material";
import StatusBar from "../StatusBar";

const UnitSnapshot = () => {
  return (
    <StyledPaper>
      <Header className="header">
        <HealthMarker />
        <Typography variant="h4">Unit #1</Typography>
        <Typography variant="body2">abcd-1234-efgh-4343</Typography>
      </Header>
      <Main>
        <div>
          <StatusBar title="water" value={100} variant="success" />
          <StatusBar title="energy" value={25} variant="error" />
          <StatusBar title="pressure" value={75} variant="success" />
        </div>
        <div className="footer">
          <Typography variant="body2" className="unit-snapshot-optimal">
            all systems optimal
          </Typography>
          <StyledButton>
            <Icon />
          </StyledButton>
        </div>
      </Main>
    </StyledPaper>
  );
};

export default UnitSnapshot;

const StyledPaper = styled(Paper)`
  height: fit-content;
  width: 345px;
  border: 1px solid #ffbcbc;
  border-radius: 20px;
  border-top-left-radius: 4px;

  .unit-snapshot-optimal {
    color: #c9c9c9;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
`;

// TODO - make component
const HealthMarker = styled("div")`
  height: 6px;
  width: 6px;
  outline: 3px solid white;
  border-radius: 50%;
  background-color: #e84b4b;
`;

const Header = styled("div")`
  background-color: #e84b4b;
  padding: 1rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 20px;
`;

const Main = styled("div")`
  padding: 1rem;
`;

const StyledButton = styled(Button)`
  border: 1px solid #ffbcbc;
  height: 56px;
  width: 56px;
  border-radius: 50%;
`;
