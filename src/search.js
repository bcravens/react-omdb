import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <div>
      <h2>Search</h2>
        <form>
          <input type="text" placeholder="Search.." />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search;
