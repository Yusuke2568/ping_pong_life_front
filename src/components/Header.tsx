import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import PingPongLife from '../ping_pong_life.png';

const Header: FC = () => (
  <AppBar position="static" color="primary">
    <AppImage src={PingPongLife} alt="logo" />
  </AppBar>
);

const AppImage = styled.img`
  width: 20%;
`;

export default Header;
