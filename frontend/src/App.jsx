import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import Search from "./Search";

function App() {

  return (
    <div className="base">
      <div className="content">
        <div className="master">

          <div className="search_parent">
            <div className="search_heading">
              <h1>Discover the quotes written for <em>you</em>.</h1>
            </div>
            <div className="search_subheading">
              <h4>Immerse yourself in the words of the masters.</h4>
            </div>
            <div className="search_left">
              <SearchBox />
            </div>
          </div>``
          <Card />
        </div>
      </div>
      <div className="made_with_love">
        Made with love <FontAwesomeIcon icon={faHeart} size="s" style={{ color: "#ff0000", marginLeft: "5px", marginRight: "5px" }}/> by <em>Prakhar</em> and <em>Neelabh.</em>
      </div>
    </div>
    // <Search />
  )
}
export default App;