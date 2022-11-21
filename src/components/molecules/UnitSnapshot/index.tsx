import React from "react";
import { Button, Icon, Paper, styled, Typography } from "@mui/material";
import StatusBar from "../StatusBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEllipsisV,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const UnitSnapshot = () => {
  return (
    <StyledPaper elevation={5}>
      <AlertTab elevation={10}>
        <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
      </AlertTab>
      <Header className="header">
        <HealthMarker />
        <div className="header-content">
          <Typography variant="h5" fontWeight={600}>
            Unit #1
          </Typography>
          <FontAwesomeIcon
            className="fa-ellipsis-icon"
            icon={faEllipsisV}
            size="lg"
            tabIndex={0}
          />
          <Typography variant="body2">abcd-1234-efgh-4343</Typography>
        </div>
      </Header>
      <Main>
        <div className="unit-snapshot-status-bars">
          <StatusBar title="water" value={100} variant="success" />
          <StatusBar title="energy" value={25} variant="error" />
          <StatusBar title="pressure" value={75} variant="success" />
        </div>
        <div className="footer">
          <Typography variant="body2" className="unit-snapshot-optimal">
            all systems optimal
          </Typography>
          <StyledButton>
            <Icon>
              <FontAwesomeIcon icon={faArrowRight} size="2xs" />
            </Icon>
          </StyledButton>
        </div>
      </Main>
    </StyledPaper>
  );
};

export default UnitSnapshot;

const StyledPaper = styled(Paper)`
  position: relative;
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
    margin-top: 2rem;
  }
`;

// TODO - make component
const AlertTab = styled(Paper)`
  position: absolute;
  top: -25px;
  right: -25px;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #e84b4b;

  display: grid;
  place-items: center;
  color: white;
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
  padding: 1.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 20px;

  color: white;

  .header-content {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 0.5rem;
  }

  .fa-ellipsis-icon {
    cursor: pointer;
    padding: 0.25rem;
  }
`;

const Main = styled("div")`
  padding: 1.5rem;
  padding-top: 2rem;

  .unit-snapshot-status-bars {
    display: grid;
    grid-row-gap: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  span {
    display: grid;
    place-items: center;
    color: #e84b4b;
  }

  border: 1px solid #ffbcbc;
  padding: 1.25rem;
  border-radius: 50%;
`;
