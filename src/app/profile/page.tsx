'use client';

import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Image, { ImageLoader } from 'next/image';
import { Reducer, cache, useReducer } from 'react';


const About: NextPage<PageProps> = props => {

  return (
    <>
      <div>
        <p>Hello Profile</p>
      </div>
    </>
  );
};

export default About;
