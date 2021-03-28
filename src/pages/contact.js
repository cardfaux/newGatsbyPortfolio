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
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="john doe"
                  className="form-control"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  placeholder="johndoe@email.com"
                  name="email"
                  className="form-control"
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  rows="5"
                  placeholder="type your message here"
                  className="form-control"
                ></textarea>
              </label>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
