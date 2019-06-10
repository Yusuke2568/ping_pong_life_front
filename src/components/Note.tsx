import React, { FC, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import TextPreview from './TextPreview';

const Note: FC = () => {
  const [input, setInput] = useState('');

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-full-width"
        label="content"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={input}
        onChange={changeInput}
      />
      <TextPreview />
    </>
  );
};

export default Note;
