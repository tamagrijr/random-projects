import React from 'react';
import styled from 'styled-components';
import img from '../images/Click.png';

export default function Instructions() {
  return (
    <Click />
  )
}
const Click = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-size: contain;
background-repeat: no-repeat;
background-position-x: center;
background-position-y: center;
background-image: url(${img});
opacity: 0.5;
`;
