import { useState, setTimeout } from 'react';
import './SearchBox.css';

function SearchBox({ setQuoteData, setShowSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/quotes/search/?author=${searchTerm}`);
            const data = await response.json();

            console.log("searched data fetched - ", data);

            if (data.length > 0) {
                setQuoteData(data);
                setShowSearch(true);
                // setTimeout(() => setShowSearch(true), 0);
            }
            else {
                alert('No quotes found for this author.');
            }
        }
        catch (error) {
            console.error('Error fetching data: ', error);
        }
    }
    return(
        <div className="search_box">
            <div className="search_container">
                <i className="search_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.6781 12.929C15.8884 11.2772 16.4305 9.22925 16.1959 7.19486C15.9613 5.16048 14.9673 3.2897 13.4128 1.9568C11.8583 0.6239 9.85794 -0.0728188 7.81187 0.00603073C5.76581 0.0848803 3.82496 0.933483 2.37762 2.38206C0.930277 3.83065 0.0831823 5.77238 0.00580795 7.81878C-0.0715664 9.86519 0.626485 11.8654 1.96031 13.4191C3.29413 14.9729 5.16536 15.9657 7.19963 16.1988C9.23389 16.432 11.2812 15.8884 12.9319 14.6767H12.9306C12.9681 14.7267 13.0081 14.7742 13.0531 14.8205L17.8654 19.6335C18.0998 19.868 18.4178 19.9999 18.7493 20C19.0809 20.0001 19.399 19.8685 19.6335 19.6341C19.8681 19.3997 19.9999 19.0817 20 18.7501C20.0001 18.4184 19.8685 18.1004 19.6341 17.8658L14.8218 13.0528C14.7771 13.0075 14.7291 12.967 14.6781 12.929ZM15.0006 8.12352C15.0006 9.02645 14.8227 9.92054 14.4773 10.7547C14.1318 11.5889 13.6254 12.3469 12.987 12.9854C12.3486 13.6239 11.5907 14.1303 10.7567 14.4759C9.92258 14.8214 9.02862 14.9992 8.12582 14.9992C7.22301 14.9992 6.32905 14.8214 5.49497 14.4759C4.66089 14.1303 3.90302 13.6239 3.26464 12.9854C2.62626 12.3469 2.11987 11.5889 1.77438 10.7547C1.4289 9.92054 1.25108 9.02645 1.25108 8.12352C1.25108 6.29997 1.97538 4.55111 3.26464 3.26166C4.55391 1.97222 6.30252 1.24781 8.12582 1.24781C9.94911 1.24781 11.6977 1.97222 12.987 3.26166C14.2763 4.55111 15.0006 6.29997 15.0006 8.12352Z" fill="black"/>
                    </svg>
                </i>
                <input type="text" placeholder="Search for authors..." className="search_input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="search_button" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchBox;