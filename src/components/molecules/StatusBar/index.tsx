import React from "react";
import {
  Typography,
  LinearProgress,
  styled,
  css,
  Skeleton,
} from "@mui/material";
import { ComponentStandards, statusTypes } from "../UnitSnapshot";

interface IStatusBar extends ComponentStandards {
  title: string;
  value: number;
  variant: statusTypes;
}

const StatusBar = ({ ...props }: IStatusBar) => {
  return props.loading ? (
    <Wrapper className="loading-StatusBar">
      <Skeleton variant="text" height={20} width={50} />
      <StatusRow {...props}>
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} width={30} />
      </StatusRow>
    </Wrapper>
  ) : (
    <Wrapper>
      <div>
        <Typography fontWeight="bold">{props.title}</Typography>
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

  ${({ theme, variant }) =>
    variant === ("error" || "warning") &&
    css`
      .status-bar-percentage {
        color: ${theme.palette.error.main};
      }
    `}

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
  background-color: ${({ theme }) => theme.palette.background.dark};
`;
