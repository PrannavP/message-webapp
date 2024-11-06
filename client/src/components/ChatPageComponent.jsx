import { useState, useEffect, useRef } from 'react';
import '../App.css';

const ChatPageComponent = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:6969');

    ws.current.onopen = () => {
      console.log('Connection opened!');
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, `Client ${message.id}: ${message.text}`]);
    };

    ws.current.onclose = () => {
      console.log('Connection closed!');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (!ws.current || ws.current.readyState !== WebSocket.OPEN) {
      setMessages((prevMessages) => [...prevMessages, 'No WebSocket connection :(']);
      return;
    }

    const messageObj = { text: message };
    ws.current.send(JSON.stringify(messageObj));
    setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Real Time Messaging</h1>
      <pre id="messages" style={{ height: '400px', overflow: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </pre>
      <input
        type="text"
        id="messageBox"
        placeholder="Type your message here"
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px' }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        id="send"
        title="Send Message!"
        style={{ width: '100%', height: '30px' }}
        onClick={sendMessage}
      >
        Send Message
      </button>
    </div>
  );
};

export default ChatPageComponent;