import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import Image from '../../public/Ernest_Hemingway.jpg' ;

function Card({ quoteData, onNext, onPrev }) {
  // if (!quoteData || quoteData.length == 0) {
  //   return <div>Loading...</div>;
  // }
    // return(
    //     <div className="card_parent">
    //         <div className="left_button" onClick={onPrev} style={{ cursor: "pointer" }}>
    //           <FontAwesomeIcon icon={faChevronLeft} size='3x' />
    //         </div>
    //         <div className="card_rectangle">
    //           <div className="card_content">
    //             <div className="genre_button">
    //               <div className="genre_frame">
    //                 <text>{quoteData.genre || 'Unknown'}</text>
    //               </div>
    //             </div>
    //             <div className="card_frame">
    //               <text>{quoteData.text}</text>
    //             </div>
    //             <div className="author_frame">
    //               <img src={quoteData.image} className="author_photo" />
    //               <text className="author_name">{quoteData.author}</text>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="right_button" onClick={onNext} style={{ cursor: "pointer" }}>
    //           <FontAwesomeIcon icon={faChevronRight} size='3x' />
    //         </div>
    //     </div>
    // )
    return(
      <div className="card_parent">
          <div className="left_button" onClick={onPrev} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </div>
          <div className="card_rectangle">
            <div className="card_content">
              <div className="genre_button">
                <div className="genre_frame">
                  <text>Unknown</text>
                </div>
              </div>
              <div className="card_frame">
                <text>The way to make people trust-worthy is to trust them.</text>
              </div>
              <div className="author_frame">
                <img src={Image} className="author_photo" />
                <text className="author_name">Ernest Hemingway</text>
              </div>
            </div>
          </div>
          <div className="right_button" onClick={onNext} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronRight} size='3x' />
          </div>
      </div>
  )
}

export default Card;