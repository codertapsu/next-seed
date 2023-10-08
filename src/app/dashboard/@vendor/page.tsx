import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';

const VendorDashboard: NextPage<PageProps> = async props => {
  console.log({ vendor: props });

  return (
    <>
      <div>
        <p>Hello Vendor Dashboard</p>
      </div>
    </>
  );
};

export default VendorDashboard;
