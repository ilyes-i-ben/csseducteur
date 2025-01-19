import "./src/styles/global.css";
import React from "react";
import { Layout } from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      name="google-site-verification"
      content="Vr2OMRt0BsMdmjgHXIs54IJN36IeB-Y6fU3H63r16q8"
    />,
  ]);
};
