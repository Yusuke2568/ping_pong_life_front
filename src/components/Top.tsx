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
      <FlexView>
        <Note />
      </FlexView>
      <FlexView>
        <TextPreview />
      </FlexView>
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
`;

const FlexView = styled.div`
  flex: 1;
  padding: 30px;
`;

export default Top;
