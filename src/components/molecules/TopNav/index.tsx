import React from 'react';
import { Paper, styled, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

// * lazy load to avoid SSR mismatch
const ThemeToggle = dynamic(() => import('../../atoms/ThemeToggle'), {
  ssr: false
});

const TopNav = () => {
  return (
    <Wrapper elevation={2}>
      <div className="topNav-header-content">
        <Typography variant="h3">WaggaFoods</Typography>
        <ThemeToggle />
      </div>
    </Wrapper>
  );
};

export default TopNav;

const Wrapper = styled(Paper)`
  width: 100vw;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 0px;

  .topNav-header-content {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin: 0 5rem;
    height: 100%;
  }
`;
