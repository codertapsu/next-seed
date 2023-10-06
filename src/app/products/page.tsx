import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { cache } from 'react';

interface Statistics {}

// export const getServerSideProps: GetServerSideProps<{
//   repo: Statistics;
// }> = async context => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// };

// type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

async function getData() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  await new Promise((resolve) => setTimeout(resolve, 5000));
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Dashboard: NextPage<PageProps> = async props => {
  const data = await getData();

  return (
    <>
      <div>
        <p>Hello Dashboard</p>
      </div>
    </>
  );
};

export default Dashboard;
