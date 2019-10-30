import React, { Component } from "react";

import { DrizzleProvider } from 'drizzle-react';
import options from "./drizzleOptions";
import LoadingContainer from "./LoadingContainer";

import Account from "./Account";

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={options}>
        <LoadingContainer>
          <Account/>
        </LoadingContainer>
      </DrizzleProvider>
      )
  }
}

export default App;
