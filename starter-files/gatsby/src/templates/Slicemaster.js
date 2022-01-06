import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

const Slicemaster = ({ data: { person } }) => {
  console.log(person);
  return (
    <>
      <div>{person.name}</div>
      <Img fluid={person.image.asset.fluid} />
      <p>{person.description}</p>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default Slicemaster;
