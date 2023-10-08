import { NextComponentType, NextPage, NextPageContext } from 'next';
import { PropsWithChildren } from 'react';

type ParallelPages = {
  vendor: NextPage;
  admin: NextPage;
};

const DashboardLayout: NextPage<PageProps<PropsWithChildren<ParallelPages>>> = props => {
  console.log(props);
  const isAdmin = Math.random() < 0.5;

  return (
    <>
      {props.children}
      {isAdmin ? props.admin : props.vendor}
    </>
  );
};

export default DashboardLayout;
