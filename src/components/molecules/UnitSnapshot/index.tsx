import React from "react";
import {
  Button,
  css,
  Icon,
  Paper,
  Skeleton,
  styled,
  Typography,
} from "@mui/material";
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

export interface ComponentStandards {
  loading?: boolean;
}

interface trackingStatus {
  type: "water" | "pressure" | "energy";
  value: number;
  status: statusTypes;
}

interface IUnitSnapshot extends ComponentStandards {
  title: string;
  uuid: string;
  water: trackingStatus;
  energy: trackingStatus;
  pressure: trackingStatus;
  inError: boolean;
}

const UnitSnapshot = ({ ...props }: IUnitSnapshot) => {
  // * Header
  const HeaderContent = (
    <>
      <HealthMarker status={props.inError ? "error" : "success"} />
      <div className="unitSnapshot-header-content">
        <Typography variant="h4">{props.title}</Typography>
        <FontAwesomeIcon
          className="fa-ellipsis-icon"
          icon={faEllipsisV}
          size="lg"
          tabIndex={0}
        />
        <Typography variant="overline">{props.uuid}</Typography>
      </div>
    </>
  );
  const HeaderContentLoading = (
    <>
      <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="text" height={40} />
      <Skeleton variant="text" />
    </>
  );

  // * Footer
  const FooterContent = (
    <>
      <Typography variant="caption" className="unitSnapshot-status-msg">
        {props.inError ? "systems suboptimal" : "systems optimal"}
      </Typography>
      <CircularButton
        className="unitSnapshot-visit-unit-button"
        status={props.inError ? "error" : "success"}
      />
    </>
  );
  const FooterContentLoading = (
    <>
      <Skeleton
        className="unitSnapshot-status-msg"
        variant="text"
        height={20}
        width="100%"
      />
      <Skeleton
        className="unitSnapshot-visit-unit-button"
        variant="circular"
        height={66}
        width={66}
      />
    </>
  );

  const ShowAlertTab = (
    <AlertTab elevation={2}>
      <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
    </AlertTab>
  );

  return (
    <StyledPaper elevation={4}>
      {props.inError && ShowAlertTab}
      <Header {...props}>
        {props.loading ? HeaderContentLoading : HeaderContent}
      </Header>
      <Main>
        <div className="unitSnapshot-status-bars">
          <StatusBar
            loading={props.loading}
            title={props.water.type}
            value={props.water.value}
            variant={props.water.status}
          />
          <StatusBar
            loading={props.loading}
            title={props.energy.type}
            value={props.energy.value}
            variant={props.energy.status}
          />
          <StatusBar
            loading={props.loading}
            title={props.pressure.type}
            value={props.pressure.value}
            variant={props.pressure.status}
          />
        </div>
        <Footer>{props.loading ? FooterContentLoading : FooterContent}</Footer>
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
`;

const Header = styled("div")<Pick<IUnitSnapshot, "inError">>`
  padding: 1.5rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${({ theme }) => theme.palette.border.light};
  border-bottom: none;
  height: 120px;

  ${({ inError, theme }) =>
    inError === true &&
    css`
      background-color: ${theme.palette.error.main};
      color: ${theme.palette.text.inverse.primary};
      border: 1px solid ${theme.palette.error.main};
      border-bottom: none;
    `}

  .unitSnapshot-header-content {
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
  height: 300px;

  ${({ inError, theme }) =>
    inError === true &&
    css`
      border: 1px solid ${theme.palette.error.light};
    `}

  .unitSnapshot-status-bars {
    display: grid;
    grid-row-gap: 0.5rem;
  }
`;

const Footer = styled("div")`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;

  .unitSnapshot-status-msg {
    color: ${({ theme }) => theme.palette.text.light};
    place-self: flex-start;
    align-self: center;
  }

  .unitSnapshot-visit-unit-button {
    grid-column: 2/3;
    place-self: flex-end;
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
