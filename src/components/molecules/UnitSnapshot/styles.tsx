import { Paper, styled, css } from '@mui/material';
import { IUnitSnapshot } from '.';
import { shouldForwardProp } from '../../../utils/emotion';

const StyledPaper = styled(Paper)`
  position: relative;
  height: fit-content;
  width: 345px;
  margin: 5rem;
  border-radius: 20px;
  border-top-left-radius: 4px;
`;

const Header = styled('div', {
  shouldForwardProp: prop =>
    shouldForwardProp<Pick<IUnitSnapshot, 'inError' | 'loading'>>(
      ['inError', 'loading'],
      prop
    )
})<Pick<IUnitSnapshot, 'inError' | 'loading'>>`
  transition: background-color 0.25s ease-in;
  padding: 1.5rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${({ theme }) => theme.palette.border.light};
  border-bottom: none;
  height: 120px;

  ${({ inError, loading, theme }) =>
    inError === true &&
    !loading &&
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

const Main = styled('div')<Partial<IUnitSnapshot>>`
  transition: background-color 0.25s ease-in;
  padding: 1.5rem;
  padding-top: 2rem;
  border: 1px solid ${({ theme }) => theme.palette.border.light};
  background-color: ${({ theme }) => theme.palette.background.paper};
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

const Footer = styled('div')`
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

export const localStyles = {
  StyledPaper,
  Header,
  Main,
  Footer
};
