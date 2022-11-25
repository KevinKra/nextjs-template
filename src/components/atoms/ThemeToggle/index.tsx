import React from 'react';
import { Box, IconButton } from '@mui/material';
import { useThemeContext } from '../../../PageProvider';

const ThemeToggle = () => {
  const { currentMode, toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3
      }}
    >
      <IconButton
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        onClick={toggleColorMode}
        color="inherit"
      >
        click me {currentMode}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
