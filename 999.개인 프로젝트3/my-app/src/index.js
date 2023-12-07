import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

const root = ReactDOM.createRoot(document.getElementById('#root'));
root.render( <App />);

function App(){
  return(
    <>
    <TopArea />
    <MainArea />
    <FooterArea />
    </>
  )
} ////////////// App 컴포넌트 //////////////////