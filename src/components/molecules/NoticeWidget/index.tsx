import React from "react";
import { styled, css, Paper } from "@mui/material";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface INoticeWidget {
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

/**
 * @param {INoticeWidget} position - (optional) positions the `<NoticeWidget />`
 * within the `position: relative;` parent container. Defaults to "topRight".
 **/
const NoticeWidget = ({ ...props }: INoticeWidget) => {
  return (
    <Wrapper elevation={2} data-testid="AlertTab" {...props}>
      <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
    </Wrapper>
  );
};

export default NoticeWidget;

const Wrapper = styled(Paper)<Pick<INoticeWidget, "position">>`
  display: grid;
  place-items: center;
  height: 50px;
  width: 50px;
  border: 2px solid ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.error.main};

  ${({ position }) => {
    switch (position) {
      case "topLeft":
        return css`
          position: absolute;
          top: -25px;
          left: -25px;
        `;
      case "topRight":
        return css`
          position: absolute;
          top: -25px;
          right: -25px;
        `;
      case "bottomLeft":
        return css`
          position: absolute;
          bottom: -25px;
          left: -25px;
        `;
      case "bottomRight":
        return css`
          position: absolute;
          bottom: -25px;
          right: -25px;
        `;
      default:
        return css`
          position: absolute;
          top: -25px;
          right: -25px;
        `;
    }
  }}
`;
