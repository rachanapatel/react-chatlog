import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import jsonData from '/Users/Rach/Developer/projects/react-chatlog/src/data/messages.json';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [heart, setHeart] = useState(props.liked);
  let heartShown = heart ? '❤️' : '🤍'; 

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={() => setHeart(!heart)}>{heartShown}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.boolean,
};

export default ChatEntry;