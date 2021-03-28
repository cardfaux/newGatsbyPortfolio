import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          {/* <form action="https://formspree.io/f/meqvjgbr" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form> */}
          <form
            name="Contact Form"
            method="POST"
            data-netlify="true"
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
              <label>Your Email:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Message:</label>
              <textarea name="message" />
            </div>
            <button type="submit">Send</button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
