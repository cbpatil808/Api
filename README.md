# API
## Steps to create the Api service
### Step 1: Create a new Node.js project.
  commands to create Node.js project
  1.  mkdir bank-branches-api
  2.  cd bank-branches-api
  3.  npm init -y

### Step 2: Install the dependencies.
  Command
  npm install graphql express apollo-server-express
  
### Step 3: Create a schema.graphql file and define the GraphQL schema for your API.
  Create a new file named schema.graphql in the root of your project and add the code

### Step 4: Create a server.js file and initialize the Apollo Server instance.
  Create a new file named server.js in the root of your project and add the code

## steps to run the Api service
  Run the server.js file to start the GraphQL API service
  command
  node server.js
  This will start the GraphQL API service on port 3000. You can then access the API at http://localhost:3000/graphql

  execute the query
  for example

  query {
  branches {
    branch
    ifsc
    bank {
      name
    }
  }
}


##Thank you!
