import React from "react";
import { css, styled } from "@mui/material";
import { statusTypes } from "../../molecules/UnitSnapshot";
import { red } from "@mui/material/colors";

interface IHealthMarker {
  status: statusTypes;
}

const HealthMarker = ({ ...props }: IHealthMarker) => {
  return <Wrapper status={props.status} />;
};

export default HealthMarker;

const Wrapper = styled("div")<IHealthMarker>`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  outline-width: 3px;
  outline-style: solid;

  ${({ status, theme }) => {
    switch (status) {
      case "success":
        return css`
          outline-color: ${theme.palette.success.light};
          background-color: ${theme.palette.success.main};
        `;
      case "warning":
        return css`
          outline-color: ${theme.palette.warning.light};
          background-color: ${theme.palette.warning.light};
        `;
      case "error":
        return css`
          outline-color: ${theme.palette.background.default};
          background-color: ${theme.palette.error.main};
        `;
      default:
        break;
    }
  }}
`;
