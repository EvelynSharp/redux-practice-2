import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='headbannder'>
          <div style={{height: '1px', marginBottom: '120px'}}>
            <h1>City Weather</h1>
          </div>
          <SearchBar />
        </div>
        <WeatherList />
      </div>
    );
  }
}
