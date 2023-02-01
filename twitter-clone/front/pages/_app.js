import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withReduxSaga from "next-redux-saga";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

// page들의 공통적인 부분
// index.js 의 부모 컴포넌트
const App = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
