import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import SEO from '../components/SEO';

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <>
      <Layout>
        <SEO
          title="James Hagood Web Development"
          description="James Hagood : A freelance web developer helping small businesses combat COVID19"
        />
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="recent projects" showLink />
        <Blogs blogs={blogs} title="latest articles" showLink />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
