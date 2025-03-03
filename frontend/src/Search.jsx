import Card from "./components/Card";
import SearchBox from "./components/SearchBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

function Search() {

    return(
        <div className="base">
            <div className="content">
                <div className="search_centered">
                    <SearchBox />
                </div>
                <Card />
            </div>
            <div className="made_with_love">
                Made with love <FontAwesomeIcon icon={faHeart} size="s" style={{ color: "#ff0000", marginLeft: "5px", marginRight: "5px" }}/> by <em>Prakhar</em> and <em>Neelabh.</em>
            </div>
        </div>
    )
}

export default Search;