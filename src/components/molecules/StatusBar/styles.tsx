import { LinearProgress, styled, css } from '@mui/material';
import { IStatusBar } from '.';

const Wrapper = styled('div')`
  display: grid;
  grid-template-rows: auto auto;
`;

const StatusRow = styled('div')<Pick<IStatusBar, 'variant'>>`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2.5rem;
  grid-column-gap: 1.25rem;

  ${({ theme, variant }) =>
    variant === ('error' || 'warning') &&
    css`
      .statusBar-percentage {
        color: ${theme.palette.error.main};
      }
    `}

  .statusBar-percentage {
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

export const localStyles = {
  Wrapper,
  StatusRow,
  StyledLinearProgress
};
