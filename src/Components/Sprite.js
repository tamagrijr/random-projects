import React from 'react';
import styled from 'styled-components';
import pegasus from '../images/pegasus.png'

export default function Sprite({ show }) {
  return (
    <SpriteModal onClick={() => show(false)} >
      <SpriteDiv></SpriteDiv>
    </SpriteModal>
  )
}

const SpriteModal = styled.div`
background-color: rgba(0,0,0,0.4);
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
`;
const SpriteDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: calc(1024px / 4);
height: calc(751px / 4);
background: url(${pegasus})
`;
