import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";
// import withReduxSaga from "next-redux-saga";

// page들의 공통적인 부분
// index.js 의 부모 컴포넌트
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Twitter</title>
      </Head>
      <Component />
    </>
  );
};

App.prototype = {
  Component: PropTypes.elementType.isRequired,
};

// export default wrapper.withRedux(withReduxSaga(App));
export default wrapper.withRedux(App);
