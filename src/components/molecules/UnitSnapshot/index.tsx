import React from "react";
import { Skeleton, Typography } from "@mui/material";
import StatusBar from "../StatusBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import HealthMarker from "../../atoms/HealthMarker";
import CircularButton from "../../atoms/CircularButton";
import { localStyles } from "./styles";
import NoticeWidget from "../NoticeWidget";

export type statusTypes = "success" | "warning" | "error";

export interface ComponentStandards {
  loading?: boolean;
}

interface trackingStatus {
  type: "water" | "pressure" | "energy";
  value: number;
  status: statusTypes;
}

export interface IUnitSnapshot extends ComponentStandards {
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

  return (
    <localStyles.StyledPaper elevation={4}>
      {props.inError && !props.loading && <NoticeWidget position="topRight" />}
      <localStyles.Header {...props}>
        {props.loading ? HeaderContentLoading : HeaderContent}
      </localStyles.Header>
      <localStyles.Main>
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
        <localStyles.Footer>
          {props.loading ? FooterContentLoading : FooterContent}
        </localStyles.Footer>
      </localStyles.Main>
    </localStyles.StyledPaper>
  );
};

export default UnitSnapshot;
