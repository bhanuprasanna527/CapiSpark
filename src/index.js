import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Front from "./component/front";
import Features from "./component/features";
import Faq from "./component/faq";
import Interested from "./component/interested";
import Footer from "./component/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Front />
      <Features />
      <Faq />
      <Interested />
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
