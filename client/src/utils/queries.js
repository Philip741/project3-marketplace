import { gql } from '@apollo/client';

// TODO: NEED TO DEFINE queries//

//RETRIEVES A SINGLE USERNAME
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
    }
  }
`;

//RETREIVES A SINGLE USER W/ ITEMS AND ASS DATA
export const QUERY_USER_AND_ITEMS = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      items {
        _id
        category
        price
        description
        itemPoster
        isSold
      }
    }
  }
`;

//RETRIEVES ALL USERS ALONG W/ ITEMS AND ASS DATA
export const QUERY_ALL_USERS_AND_ITEMS = gql`
  query allUsers {
    users {
      username
      email
      items {
        _id
        category
        name
        description
        price
        isSold
      }
    }
  }
`;

//RETRIEVES ALL ITEMS FOR SALE BY ID
export const QUERY_ALL_ITEMS = gql`
  query items {
    items {
      _id
    }
  }
`;

//RETRIEVES ALL ITEMS FOR SALE
export const QUERY_LOAD_ALL = gql`
  query loadall {
    items {
      name
      description
      price
      category
      itemPoster
    }
  }
`;
