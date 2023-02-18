import './App.css';
import './normalize.css';
import MessageComponent from './components/MessageComponent';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidemenu-button">
          + New chat
        </div>
      </aside>
      <div className="x">
        <p>New Chat</p>
      </div>
      <div className="chatbox">

        <MessageComponent />

        <div className="chat-input-holder">
          <textarea rows="1" className="chat-input" type="text">

          </textarea>
        </div>
        
      </div>
    </div>
  );
}

export default App;
