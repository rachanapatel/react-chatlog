import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';'./components/ChatLog';
import jsonData from '/Users/Rach/Developer/projects/react-chatlog/src/data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>title2</h2>
      </header>
      <main>
        {/* <ChatEntry sender="Vladimir" body="why are you arguing with me" timeStamp="2018-05-29T22:49:06+00:00"></ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={jsonData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
