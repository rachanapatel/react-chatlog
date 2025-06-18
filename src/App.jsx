import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';'./components/ChatLog';
import jsonData from './data/messages.json';
import { useState }from 'react';

const App = () => {
  const [messages, setMessages] = useState(jsonData);

  const updateMsgLikes = (id) => {
    const update = messages.map(message => {
          if (message.id === id) {
            return { ...message, liked: !message.liked};
          }
          return message;
        });
        return setMessages(update)
  };

  const numHearts = () => {
    let count = 0;
    for (const msg of messages) {
      if (msg.liked === true) {
        count++;
      }
    }
    return count;
  }


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{numHearts()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onHeart={updateMsgLikes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
