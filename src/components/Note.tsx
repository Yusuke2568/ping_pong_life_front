import React, { FC } from 'react';

import TextField from '@material-ui/core/TextField';

export interface NoteProps {
  input?: string;
  change?: (text: string) => void;
}

const Note: FC<NoteProps> = ({ input = '', change = () => {} }) => {
  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value || '';
    change(text);
  };

  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        style={{ margin: 8 }}
        placeholder="Placeholder"
        fullWidth
        rows={3}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={input}
        onChange={changeText}
      />
    </>
  );
};

export default Note;
