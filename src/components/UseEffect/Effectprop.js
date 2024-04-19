import React, { useState, useEffect } from 'react';

function Effectprop(props) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Update the document title with the count whenever count or message changes
    document.title = `Count: ${count} | Message: ${message}`;
  }, [count, message]); // Dependency array specifies when the effect should run

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Message from props: {props.message}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message"
      />
    </div>
  );
}

export default Effectprop;

