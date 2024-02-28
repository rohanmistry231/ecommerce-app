import React from "react";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </Helmet>
    </div>
  );
};

export default Meta;
