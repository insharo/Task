import { gql } from "@apollo/client";
export const GET_USER = gql`
  query GetUser($userId: Int!) {
    user(userId: $userId) {
      firstName
      fatherName
      grandfatherName
      familyName
      title
      dateOfBirth
      gender
      maritalStatus {
        name
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      passport {
        number
        issueDate
        expiryDate
      }
      dependants
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: Int!, $input: UserInput!) {
    updateUser(userId: $userId, input: $input) {
      success
      message
      user {
        firstName
        fatherName
        grandfatherName
        familyName
        title
        dateOfBirth
        gender
        maritalStatus {
          name
        }
        nationalities {
          country {
            id
            name
          }
          countryId
        }
        passport {
          number
          issueDate
          expiryDate
        }
        dependants
        localizedName {
          firstName
          fatherName
          grandfatherName
          familyName
        }
        nationalId {
          idNumber
          expiryDate
        }
      }
    }
  }
`;
