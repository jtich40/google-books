import { gql } from '@apollo/client';
// mutation for login
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
// mutation for add user
export const ADD_USER = gql`
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
// mutation for save book
export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
            }
    }
}
`;
// mutation for remove book
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
            }
    }
}
`;