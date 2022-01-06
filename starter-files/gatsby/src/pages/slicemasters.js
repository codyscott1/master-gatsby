import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function Slicemasters({ data }) {
  const slicemasters = data.slicemasters.nodes;

  const SlicemasterGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `;

  const SlicemasterStyles = styled.div`
    a {
      text-decoration: none;
    }
    .gatsby-image-wrapper {
      height: 400px;
    }
    h2 {
      transform: rotate(-2deg);
      text-align: center;
      font-size: 4rem;
      margin-bottom: -2rem;
      position: relative;
      z-index: 2;
    }
    .description {
      background: var(--yellow);
      padding: 1rem;
      margin: 2rem;
      margin-top: -6rem;
      z-index: 2;
      position: relative;
      transform: rotate(1deg);
      text-align: center;
    }
  `;

  return (
    <SlicemasterGrid>
      {slicemasters.map((person) => (
        <SlicemasterStyles key={person.id}>
          <Link to={`/slicemaster/${person.slug.current}`}>
            <h2 className="mark">{person.name}</h2>
          </Link>
          <Img fluid={person.image.asset.fluid} />
          <p className="description">{person.description}</p>
        </SlicemasterStyles>
      ))}
    </SlicemasterGrid>
  );
}

export const query = graphql`
  query($skip: Int! = 0, $pageSize: Int! = 4) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        description 
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
