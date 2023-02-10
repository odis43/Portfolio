import React, { useState } from 'react';

const Typer = () => {
  const [strings] = useState(['developer.', 'musician.', 'learner.']);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');
  const [typing, setTyping] = useState(true);

  React.useEffect(() => {
    let timeoutId = null;
    const currentString = strings[currentStringIndex];
    let i = 0;

    const type = () => {
      if (i <= currentString.length) {
        setCurrentString(currentString.slice(0, i));
        i++;
        timeoutId = setTimeout(type, 50);
      } else {
        timeoutId = setTimeout(() => setTyping(false), 1000);
      }
    };

    const deleteText = () => {
      if (i >= 0) {
        setCurrentString(currentString.slice(0, i));
        i--;
        timeoutId = setTimeout(deleteText, 50);
      } else {
        setCurrentString('');
        setCurrentStringIndex(currentStringIndex + 1);
        setTyping(true);
      }
    };

    if (typing) {
      type();
    } else {
      deleteText();
    }

    return () => clearTimeout(timeoutId);
  }, [currentStringIndex, typing]);

  return (
    <div>
      <p>{currentString}</p>
    </div>
  );
};

export default Typer;