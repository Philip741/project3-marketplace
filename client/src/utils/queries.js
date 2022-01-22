import { gql } from '@apollo/client';

// TODO: NEED TO DEFINE queries//

//ONLY RETRIEVES A SINGLE USERNAME
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
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
<<<<<<< Updated upstream
=======

//RETRIEVES ALL ITEMS FOR SALE
export const QUERY_LOAD_ALL = gql`
  query loadall {
    items {
      name
      description
      price
      category
      itemPoster
      imgUrl
    }
  }
`;
>>>>>>> Stashed changes
