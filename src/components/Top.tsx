import React, { FC } from 'react';

import Header from './Header';
import Note from '../containers/Note';
import TextPreview from '../containers/TextPreview';

const Top: FC = () => (
  <>
    <Header />
    <Note />
    <TextPreview />
  </>
);

export default Top;
