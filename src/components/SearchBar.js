import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    //we have to use an arrow function above otherwise we cannot access this.state.term
    //due to the context being removed by JS
    event.preventDefault(); //needed on every form to prevent enter posting the form
    //    console.log("SearchBarJS:" + this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* onSubmit is needed on every Form to handle submission to a callback handler function*/}
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
