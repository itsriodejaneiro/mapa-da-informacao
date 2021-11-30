import React, { Component } from 'react';
// import Footer from './Footer';
// import Header from './Header';
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'))
const Footer = dynamic(() => import('./Footer'))

export default class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
}