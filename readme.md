Basic Information Management System

This is a React + TypeScript project integrated with a GraphQL backend (NestJS). It allows users to view and update basic user information dynamically with a clean and responsive UI.
Features

    Display User Data: View user details such as National ID, Name, Passport Info, etc., in a clean grid layout.
    Edit Functionality: Edit user details dynamically using a form with prefilling and validation.
    GraphQL Integration:
        Queries: Fetch user data.
        Mutations: Update user data.
    Responsive Design: Pixel-perfect layout using Tailwind CSS.
    Type Safety: Strong typing with TypeScript.

Prerequisites

    Node.js: v16.x or later
    NPM: v8.x or later
    NestJS CLI: (for backend development)

Installation

1. Clone the Repository

git clone https://github.com/your-repo-name.git
cd your-repo-name

2. Install Dependencies
   Frontend

cd frontend
npm install

Backend

cd backend
npm install

Running the Application

1. Start the Backend

Navigate to the backend folder and start the server:

cd backend
npm run start:dev

By default, the backend runs on: http://localhost:3000/graphql. 2. Start the Frontend

Navigate to the frontend folder and start the React app:

cd frontend
npm start

The frontend runs on: http://localhost:3000.
GraphQL Queries and Mutations
Fetch User Data

Query:

query GetUser($userId: Int!) {
user(userId: $userId) {
firstName
fatherName
grandfatherName
familyName
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
nationalities {
country {
id
name
}
countryId
}
maritalStatus {
id
name
}
dependants
}
}

Update User Data

Mutation:

mutation UpdateUser($userId: Int!, $input: UserInput!) {
updateUser(userId: $userId, input: $input) {
success
message
user {
firstName
familyName
nationalId {
idNumber
expiryDate
}
}
}
}

Editing and Saving User Data

    Click the Edit button in the "Basic Information" card.
    Modify fields as needed.
    Save changes by clicking the Save button. Changes will be sent to the backend via GraphQL mutation.

Technologies Used

    Frontend:
        ReactJS (TypeScript)
        Tailwind CSS
        Apollo Client for GraphQL
        React Hook Form
    Backend:
        NestJS (TypeScript)
        GraphQL with Apollo Server
        Mock Data (replaceable with a database)

    Prerequisites

    Node.js: v16.x or later
    NPM: v8.x or later
    NestJS CLI: (for backend development)
