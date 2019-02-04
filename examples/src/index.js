import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Carousel from '../../src';

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
`;

const App = () => (
  <div>
    <Carousel title="Carousel">
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
    </Carousel>
  </div>
);

render(<App />, document.getElementById('root'));
