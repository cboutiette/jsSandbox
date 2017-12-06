import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class VideoGamesList extends React.Component {
    render() {
        const vidGames = this.props.vidGames

        return <ol> {
            vidGames.map((game, index) => (
            <li key={index}>{game.name}</li>
        ))}
        </ol>
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <VideoGamesList vidGames={[
              { name: 'Doom'},
              { name: 'MarioKart 64'},
              { name: 'Zelda'}
          ]}/>
          <VideoGamesList vidGames={[
              { name: 'Mario Party'},
              { name: 'CounterStrike'}
          ]}/>
      </div>
    );
  }
}

export default App;
