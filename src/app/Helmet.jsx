import { Helmet } from "react-helmet";

const HelmetCompo = () => {
  return (
    <Helmet>
      {/* fontawesome */}
      <link
        rel="stylesheet"
        data-purpose="Layout StyleSheet"
        title="Web Awesome"
        href="/css/app-wa-89587a1ff923b19df8a6a37179b8327c.css?vsn=d"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-thin.css"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-solid.css"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-regular.css"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css"
      />

      {/* google font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default HelmetCompo;
