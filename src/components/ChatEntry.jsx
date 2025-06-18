import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  // const [heart, setHeart] = useState(props.liked);
  let heartShown = props.liked ? '❤️' : '🤍'; 

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        {/* <button className="like" onClick={() => setHeart(!heart)}>{heartShown}</button> */}
        <button className="like" onClick={() => props.onHeart(props.id)}>{heartShown}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onHeart: PropTypes.func.isRequired,
};

export default ChatEntry;