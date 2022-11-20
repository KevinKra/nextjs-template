import React from "react";
import { Typography, LinearProgress, styled, css } from "@mui/material";

interface IStatusBar {
  title: string;
  value: number;
  variant: "success" | "error";
}

const StatusBar = ({ ...props }: IStatusBar) => {
  return (
    <Wrapper>
      <div>
        <Typography fontWeight={600}>{props.title}</Typography>
      </div>
      <StatusRow {...props}>
        <StyledLinearProgress
          color={props.variant}
          variant="determinate"
          value={props.value}
        />
        <Typography className="status-bar-percentage">
          {props.value}%
        </Typography>
      </StatusRow>
    </Wrapper>
  );
};

export default StatusBar;

const Wrapper = styled("div")`
  display: grid;
  grid-template-rows: auto auto;
`;

const StatusRow = styled("div")<IStatusBar>`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2.5rem;
  grid-column-gap: 1.25rem;

  ${({ variant }) =>
    variant === "error" &&
    css`
      .status-bar-percentage {
        color: #e84b4b;
      }
    `}
  /* border: 1px solid red; */

  .status-bar-percentage {
    place-self: flex-end;
  }
`;

const StyledLinearProgress = styled(LinearProgress)`
  .MuiLinearProgress-bar {
    border-radius: 5px;
  }
  height: 0.45rem;
  border-radius: 5px;
  background-color: #d9d9d9;
`;
