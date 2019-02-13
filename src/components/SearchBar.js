import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/* We have defined a controlled element that has a state of term set when 
            text is entered */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
