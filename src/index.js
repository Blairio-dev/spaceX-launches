import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./global-styles";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { App } from "./App";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
