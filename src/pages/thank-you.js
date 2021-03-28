import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You For Contacting Me" />
    <main className="error-page">
      <div className="error-container">
        <h1>Thank you for your submission!</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </main>
  </Layout>
);

export default ThankYouPage;
