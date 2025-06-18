import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    return (
        props.entries.map(entry => 
        <ChatEntry key={entry.id} id={entry.id} sender={entry.sender} body={entry.body} liked={entry.liked} timeStamp= {entry.timeStamp} 
        onHeart={props.onHeart}></ChatEntry>
    ));
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })).isRequired,
    onHeart: PropTypes.func.isRequired,
};

export default ChatLog;