import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

const ComponentName = ({ data }) => {
  const { content, title, description, image } = data.blog;

  const blogImage = image.childImageSharp.fluid.src;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        anotherImage={blogImage}
        socialTitle={title}
        socialDescription={description}
        socialALT={description}
        article
      />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`;

export default ComponentName;
