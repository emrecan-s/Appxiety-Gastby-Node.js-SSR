import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ReactDOM from 'react-dom';
import { Component } from "react";
import Header from './header'
import './layout.css'
import 'materialize-css/dist/css/materialize.min.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My fav blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>

  <React.Fragment> 

          <footer style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>
        <p>
          Made with <i className="material-icons">favorite</i> in Warsaw. Powered by Emrecan Sanli <a href= "https://www.linkedin.com/in/emrecan-%C5%9Fanl%C4%B1-7a967764/"> Contact </a>
         </p>
      </footer>
      </React.Fragment> 
     

      </>
    )}
  />
)



export default Layout
