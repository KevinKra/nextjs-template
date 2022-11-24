import { Paper, styled, css } from "@mui/material";
import { IUnitSnapshot } from ".";

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

export const localStyles = {
  StyledPaper,
  Header,
  Main,
  Footer,
  AlertTab,
};
