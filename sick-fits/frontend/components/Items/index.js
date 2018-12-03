import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';
import styled from 'styled-components';
import DisplayError from '../ErrorMessage';

const GET_ALL_ITEMS = gql`
  query GET_ALL_ITEMS {
    items {
      id
      title
      description
      price
      image
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={GET_ALL_ITEMS}>
          {({data, error, loading}) => {
            if(loading) {
              return <div>loading ...</div>
            }
            if(error) {
              return <DisplayError />
            }
            return (
              <ItemsList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>
            );
          }}
        </Query >
      </Center>
    );
  }
}

export default Items;
export { GET_ALL_ITEMS };