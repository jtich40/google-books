import { gql } from '@apollo/client';
// set up query for to get me (logged in user)
export const QUERY_ME = gql`
{
    me {
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
`