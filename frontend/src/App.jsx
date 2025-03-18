import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import Search from "./Search";

function App() {
  const [quoteData, setQuoteData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  console.log('App.jsx quoteData - ', quoteData);
  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/quotes/", {
          method: "GET",
          credentials: "include",
        });
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        setQuoteData(data);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Error fetching random quote:", error);
      }
    };  
    if(quoteData.length == 0){
      fetchRandomQuote();
    }
  }, []);

  const handleNextQuote = () => {
    console.log("handleNextQuote clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quoteData.length);
  }

  const handlePrevQuote = () => {
    console.log("handlePrevQuote clicked");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quoteData.length) % quoteData.length);
  }

  console.log('quoteData - ', quoteData);
  return (
    <>
      {
        showSearch ? (
          <Search quoteData={quoteData} setQuoteData={setQuoteData} />
        ) : (
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
                    
                    <SearchBox setQuoteData={setQuoteData} setShowSearch={setShowSearch} />
                  
                  </div>
                </div>
                
                <Card quoteData={quoteData[currentIndex]} onNext={handleNextQuote} onPrev={handlePrevQuote} />
              
              </div>
            </div>
            <div className="made_with_love">
              Made with love <FontAwesomeIcon icon={faHeart} size="sm" style={{ color: "#ff0000", marginLeft: "5px", marginRight: "5px" }}/> by <em>Prakhar</em> and <em>Neelabh.</em>
            </div>
          </div>
        )
      }
    </>
  )
}
export default App;