import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  render() {
    return(
      <form className='input-group'>
        <input />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    )
  }
}


export default connect()(SearchBar);
