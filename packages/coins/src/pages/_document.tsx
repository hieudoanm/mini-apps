import { Html, Head, Main, NextScript } from 'next/document';

const NODE_ENV = process.env.NODE_ENV || 'development';

const Document = () => {
  const assetPrefix = NODE_ENV === 'production' ? '/mini-apps/coins' : '';

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Coins" />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${assetPrefix}/favicon.ico`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
