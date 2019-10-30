import React, { Component } from "react";

import { Drizzle } from 'drizzle'
import { DrizzleProvider } from 'drizzle-react';
import options from "./drizzleOptions";
import LoadingContainer from "./LoadingContainer";

import Header from "./Header";
import Pet from "./Pet";

class App extends Component {
  render() {
    const petInfo = require('./pets.json');
    return (
      <DrizzleProvider options={options}>
        <LoadingContainer>
          <div className="container">
            <Header />
            <div id="petsRow" className="row">
              {petInfo.map((pet, i) => {
                return (
                <Pet
                  key={pet.id}
                  pet={pet}
                />)
              })}
            </div>
          </div>
        </LoadingContainer>
      </DrizzleProvider>
    )
  }
}

export default App;
