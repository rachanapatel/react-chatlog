import './ChatLog.css';
import ChatEntry from './ChatEntry';
// import PropTypes from 'prop-types';

const ChatLog = (props) => {
    return (
        props.entries.map(entry => 
        <ChatEntry key={entry.id} sender={entry.sender} body={entry.body} liked={entry.liked} timeStamp= {entry.timeStamp} entry={entry}></ChatEntry>
    ));
};


export default ChatLog;