import React, { FC } from 'react';

// style
import styled from 'styled-components';
import Header from './Header';
import Note from '../containers/Note';
import TextPreview from '../containers/TextPreview';

const Top: FC = () => (
  <>
    <Header />
    <Container>
      <Note />
      <TextPreview />
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
`;

export default Top;
