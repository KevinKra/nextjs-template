import { render, RenderOptions } from '@testing-library/react';
import { FC } from 'react';
import PageProvider from './PageProvider';

const AllTheProviders: FC<{ children: JSX.Element }> = ({ children }) => {
  return <PageProvider>{children}</PageProvider>;
};

const customRender = (
  ui: JSX.Element,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
