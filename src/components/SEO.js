import React from 'react';
import { Helmet } from 'react-helmet';
import { JsonLd } from '../components/JsonLd';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        titleTemplate
        twitterUsername
        keywords
      }
    }
  }
`;
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    keywords,
    twitterUsername,
    titleTemplate,
  } = site.siteMetadata;

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={`${title} | ${siteTitle}`}
        titleTemplate={titleTemplate}
      >
        <meta name="description" content={description || siteDesc} />
        <meta name="keywords" content={keywords} />
        <meta name="image" content={image} />
        {/* FACEBOOK CARD */}
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="531" />
        {/* twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDesc} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
        <link rel="canonical" href="https://jameshagood.tech" />
        <JsonLd>
          {{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'http://jameshagood.tech',
            name: 'JamesHagood Design & Development',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-205-544-4683',
              contactType: 'Customer service',
            },
          }}
        </JsonLd>
      </Helmet>
    </>
  );
};

export default SEO;
