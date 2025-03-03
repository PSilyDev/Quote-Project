import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import authorImage from '../../public/author.jpeg';
import './Card.css';

function Card() {
    return(
        <div className="card_parent">
            <div className="left_button">
              <FontAwesomeIcon icon={faChevronLeft} size='3x' />
            </div>
            <div className="card_rectangle">
              <div className="card_content">
                <div className="genre_button">
                  <div className="genre_frame">
                    <text>Philosophy</text>
                  </div>
                </div>
                <div className="card_frame">
                  <text>There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.</text>
                </div>
                <div className="author_frame">
                  <img src={authorImage} className="author_photo" />
                  <text className="author_name">Ernest Hemingway</text>
                </div>
              </div>
            </div>
            <div className="right_button">
              <FontAwesomeIcon icon={faChevronRight} size='3x' />
            </div>
        </div>
    )
}

export default Card;