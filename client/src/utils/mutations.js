import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEMS_FOR_SALE = gql`
  mutation Item($name: String!, $description: String!, $price: Int) {
    addItem(name: $name, description: $description, price: $price) {
      name
      description
      price
    }
  }
`;
