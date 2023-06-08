import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';


export function AddThoughtForm(props) {

  const [text, setText] = useState('');

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    if(text.length > 0) {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
  props.addThought(thought);
  setText('');
    }else{
      return;
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
