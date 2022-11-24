import { render, RenderOptions } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { getDesignTokens } from './theme';

const theme = createTheme(getDesignTokens('light'));

const AllTheProviders: FC<{ children: JSX.Element }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: JSX.Element,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
