import React from 'react';
import GlobalStyle from '../styles/global'
import Header from './header/Header'


export default function App() {
  return (
    <div style={{height: "700px"}}>
      <GlobalStyle />
      <Header />
      <h1>Hi</h1>
    </div>
  )
}
