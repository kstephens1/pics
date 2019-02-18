import React from "react";
import unsplash from "../api/unsplash"; //<<ref to config file
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] }; //init to an empty array

  onSearchSubmit = async term => {
    //async/await pattern to deal with executing code when network request has completed
    console.log("App.js Here: " + term);

    const response = await unsplash.get("/search/photos", {
      //<<now ref'ing unsplash.get
      //await here
      params: { query: term }
    });

    this.setState({ images: response.data.results }); //subsequent code called to set state
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}
export default App;
