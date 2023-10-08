import { NextPage } from 'next';
import { PropsWithChildren } from 'react';

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <section>{children}</section>;
};

export default Layout;
