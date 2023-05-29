"use client"
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Home() {
  const [text, setText] = useState<string>('');
  const [notes, setNotes] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNotes([...notes, text]);
    setText('');
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit">Add note</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  )
}
