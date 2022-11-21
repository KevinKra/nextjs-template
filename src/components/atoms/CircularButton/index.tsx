import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, css, Icon, styled } from "@mui/material";
import { statusTypes } from "../../molecules/UnitSnapshot";

interface ICircularButton {
  className: string;
  status: statusTypes;
}

const CircularButton = ({ ...props }: ICircularButton) => {
  return (
    <Wrapper {...props}>
      <Icon>
        <FontAwesomeIcon icon={faArrowRight} size="2xs" />
      </Icon>
    </Wrapper>
  );
};

export default CircularButton;

const Wrapper = styled(Button)<ICircularButton>`
  span {
    display: grid;
    place-items: center;
  }

  padding: 1.25rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;

  ${({ status, theme }) => {
    switch (status) {
      case "error":
        return css`
          border-color: ${theme.palette.error.light};
          background-color: ${theme.palette.background.default};
          span {
            color: ${theme.palette.primary.main};
          }
        `;
      default:
        return css`
          border-color: ${theme.palette.grey[200]};
          background-color: ${theme.palette.background.default};
          span {
            color: ${theme.palette.text.primary};
          }
        `;
    }
  }}
`;
