import React from 'react'
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import WelcomeMain from './WelcomeMain/WelcomeMain';
import AboutCourse from './AboutCourse/AboutCourse';
import Certificates from './Centificates/Certificates';
import FAQ from './FAQ/FAQ';
import Authors from './Authors/Authors';

function Layout () {
    return (
        <>
          <WelcomeMain/>
          <AboutCourse/>
          <Certificates />
          <FAQ/>
          <Authors />
          <Outlet />
          <Footer />
        </>
      );
}

export default Layout