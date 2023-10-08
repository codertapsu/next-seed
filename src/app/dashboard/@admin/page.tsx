import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';

const AdminDashboard: NextPage<PageProps> = async props => {
  console.log({ admin: props });

  return (
    <>
      <div>
        <p>Hello Admin Dashboard</p>
      </div>
    </>
  );
};

export default AdminDashboard;
