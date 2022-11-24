import React from "react";
import { Typography, Skeleton } from "@mui/material";
import { ComponentStandards, statusTypes } from "../UnitSnapshot";
import { localStyles } from "./styles";

export interface IStatusBar extends ComponentStandards {
  title: string;
  value: number;
  variant: statusTypes;
}

const StatusBar = ({ ...props }: IStatusBar) => {
  const StatusBarContent = (
    <>
      <div>
        <Typography fontWeight="bold">{props.title}</Typography>
      </div>
      <localStyles.StatusRow variant={props.variant}>
        <localStyles.StyledLinearProgress
          color={props.variant}
          variant="determinate"
          value={props.value}
        />
        <Typography className="statusBar-percentage">{props.value}%</Typography>
      </localStyles.StatusRow>
    </>
  );

  const StatusBarContentLoading = (
    <>
      <Skeleton variant="text" height={20} width={50} />
      <localStyles.StatusRow variant={props.variant}>
        <Skeleton variant="text" height={20} />
        <Skeleton
          className="statusBar-percentage"
          variant="text"
          height={20}
          width={30}
        />
      </localStyles.StatusRow>
    </>
  );

  return (
    <localStyles.Wrapper>
      {props.loading ? StatusBarContentLoading : StatusBarContent}
    </localStyles.Wrapper>
  );
};

export default StatusBar;
