import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import Icon from '../images/appxiety.png'
import { graphql } from 'gatsby'
import 'materialize-css/dist/css/materialize.min.css'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteUrl
    const { title, description } = post.frontmatter;
    const thumbnail =
        post.frontmatter.image &&
        post.frontmatter.image.childImageSharp.resize.src

    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                thumbnail={thumbnail ? url + thumbnail : url + Icon}
                url={url}
                pathname={props.location.pathname}
            />
            <div>
              
                {thumbnail && <Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}


export default BlogPost


export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
        
       }
   }

  site {
    siteMetadata {
        siteUrl
      }
   }
}
`