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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
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
