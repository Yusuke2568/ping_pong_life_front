import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Marked } from 'marked-ts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);

export interface TextPreviewProps {
  previewText?: string;
}

const TextPreview: FC<TextPreviewProps> = ({ previewText = '' }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3"></Typography>
        <Typography component="p"></Typography>
        <div
          dangerouslySetInnerHTML={{
            __html: Marked.parse(previewText),
          }}
        ></div>
      </Paper>
    </div>
  );
};

export default TextPreview;
