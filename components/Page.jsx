import React from 'react';
import { NextSeo } from 'next-seo';

export const Page = ({ name, children, path }) => {
  const title = `Fast feedback - ${name}`;
  const url = `https://test.com${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      >
        {children}
      </NextSeo>
    </>
  )
}
