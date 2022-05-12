import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {
  
  constructor() {
    super()
    this.state ={
      sortBy: ""
    }
  }

  sortedBy = (event) =>{
    this.setState({
      sortBy:event.target.name
    })
  }

  render() {

    return (
        
          <div className="text-center buttons">
            <header className="text-center">
              <h1>Leaderboard</h1>
            </header>
            <div className="text-center buttons">
              <Age sortedBy={this.sortedBy} />
              <Name sortedBy ={this.sortedBy} />
              <Points sortedBy ={this.sortedBy}/>
              <Rank sortedBy ={this.sortedBy} />
            </div>
            <div className="text-center buttons">
              <Table altered={this.state.sortBy}/>
            </div>
          </div>
    );
  }
}

