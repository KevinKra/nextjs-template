import React from "react";
import { Button, css, Icon, Paper, styled, Typography } from "@mui/material";
import StatusBar from "../StatusBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEllipsisV,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import HealthMarker from "../../atoms/HealthMarker";
import CircularButton from "../../atoms/CircularButton";

export type statusTypes = "success" | "warning" | "error";

interface trackingStatus {
  type: "water" | "pressure" | "energy";
  value: number;
  status: statusTypes;
}

interface IUnitSnapshot {
  title: string;
  uuid: string;
  water: trackingStatus;
  energy: trackingStatus;
  pressure: trackingStatus;
  inError: boolean;
}

const UnitSnapshot = ({ ...props }: IUnitSnapshot) => {
  return (
    <StyledPaper elevation={4}>
      {props.inError && (
        <AlertTab elevation={2}>
          <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
        </AlertTab>
      )}
      <Header className="header" {...props}>
        {props.inError ? (
          <HealthMarker status="error" />
        ) : (
          <HealthMarker status="success" />
        )}
        <div className="header-content">
          <Typography variant="h4">{props.title}</Typography>
          <FontAwesomeIcon
            className="fa-ellipsis-icon"
            icon={faEllipsisV}
            size="lg"
            tabIndex={0}
          />
          <Typography variant="overline">{props.uuid}</Typography>
        </div>
      </Header>
      <Main>
        <div className="unit-snapshot-status-bars">
          <StatusBar
            title={props.water.type}
            value={props.water.value}
            variant={props.water.status}
          />
          <StatusBar
            title={props.energy.type}
            value={props.energy.value}
            variant={props.energy.status}
          />
          <StatusBar
            title={props.pressure.type}
            value={props.pressure.value}
            variant={props.pressure.status}
          />
        </div>
        <div className="footer">
          {props.inError ? (
            <>
              <Typography variant="caption" className="error-status-msg">
                systems suboptimal
              </Typography>
              <CircularButton className="visit-unit-button" status="error" />
            </>
          ) : (
            <>
              <Typography variant="caption" className="optimal-status-msg">
                all systems optimal
              </Typography>
              <CircularButton className="visit-unit-button" status="success" />
            </>
          )}
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
  margin: 5rem;
  border-radius: 20px;
  border-top-left-radius: 4px;

  .footer {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
  }

  .error-status-msg,
  .optimal-status-msg {
    color: ${({ theme }) => theme.palette.text.light};
    place-self: flex-start;
    align-self: center;
  }

  .visit-unit-button {
    grid-column: 2/3;
    place-self: flex-end;
  }
`;

// border: 1px solid ${({ theme }) => theme.palette.b};
const Header = styled("div")<Partial<IUnitSnapshot>>`
  padding: 1.5rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${({ theme }) => theme.palette.border.light};
  border-bottom: none;

  ${({ inError, theme }) =>
    inError === true &&
    css`
      background-color: ${theme.palette.error.main};
      color: ${theme.palette.text.inverse.primary};
      border: 1px solid ${theme.palette.error.main};
      border-bottom: none;
    `}

  .header-content {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-row-gap: 0.5rem;
    margin-top: 1rem;
    align-items: center;
  }

  .fa-ellipsis-icon {
    cursor: pointer;
    padding: 0.25rem;
  }
`;

const Main = styled("div")<Partial<IUnitSnapshot>>`
  padding: 1.5rem;
  padding-top: 2rem;
  border: 1px solid ${({ theme }) => theme.palette.border.light};
  background-color: ${({ theme }) => theme.palette.background.default};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ inError, theme }) =>
    inError === true &&
    css`
      border: 1px solid ${theme.palette.error.light};
    `}

  .unit-snapshot-status-bars {
    display: grid;
    grid-row-gap: 0.5rem;
  }
`;

// TODO - make component
const AlertTab = styled(Paper)`
  position: absolute;
  top: -25px;
  right: -25px;
  border: 2px solid ${({ theme }) => theme.palette.common.white};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.error.main};

  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.palette.common.white}; ;
`;
