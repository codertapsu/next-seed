'use client';

import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Image, { ImageLoader } from 'next/image';
import { Reducer, cache, useReducer } from 'react';

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

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}`;
};

interface State {
  name: string;
  age: number;
}
interface Action {
  type: string;
  nextName: string;
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
};

const initialState: State = { name: 'Taylor', age: 42 };

const About: NextPage<PageProps> = props => {
  console.log(props);
  /**
   * @see https://react.dev/reference/react/useReducer#examples-initializer
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  // const data = await getData();

  return (
    <>
      <div>
        <p>Hello Dashboard</p>
        <div>
          <Image
            loader={imageLoader}
            src="/images/avatar.JPEG"
            alt="Picture of the author"
            width={500}
            height={500}
            unoptimized={true}
          />
        </div>
        <div style={{ position: 'relative', width: '50%', paddingTop: '100%' }}>
          {/* <Image
            src={src}
            fill
            style={{ objectFit: "cover" }}
            alt="elephant image"
          /> */}
          {/* <Image
            loader={imageLoader}
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          /> */}
        </div>
      </div>
    </>
  );
};

// export const runtime = 'edge'; // 'nodejs' (default) | 'edge'
export default About;
