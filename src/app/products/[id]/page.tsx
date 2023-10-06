import type { NextPage, InferGetServerSidePropsType, GetStaticPaths, GetServerSideProps } from 'next';
import { cache } from 'react';

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

// export const getServerSideProps: GetServerSideProps<{
//   repo: Statistics;
// }> = async context => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// };

// type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function generateStaticParams(z: any) {
  console.log({z});
  
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return products.map(item => ({ id: String(item.id) }));
}

async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page: NextPage<PageProps> = async props => {
  console.log({ props });
  const data = await getData(props.params['id']);

  return (
    <>
      <div>
        <p>Hello {data.title}</p>
      </div>
    </>
  );
};

export default Page;
