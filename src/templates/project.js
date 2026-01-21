import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Layout } from '@components';

const Container = styled.article`
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    font-size: clamp(28px, 4vw, var(--fz-heading));
    margin: 0 0 20px 0;
  }

  .meta {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 30px;
  }

  .content {
    color: var(--light-slate);
    line-height: 1.7;
    font-size: 18px;

    img {
      max-width: 100%;
      height: auto;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
`;

const ProjectTemplate = ({ data, location }) => {
  const project = data.markdownRemark;
  const { frontmatter, html } = project;

  return (
    <Layout location={location}>
      <Container>
        <h1>{frontmatter.title}</h1>
        <div className="meta">{frontmatter.company || ''}</div>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const query = graphql`
  query ProjectByTitle($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        company
        tech
        github
        external
        date
      }
    }
  }
`;

export default ProjectTemplate;
