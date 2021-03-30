import React from 'react';
import styled, { keyframes } from 'styled-components';
import pegasus from '../images/pegasus.png'

export default function Sprite({ show }) {
  return (
    <SpriteModal onClick={() => show(false)} >
      <SpriteWrapper>
        <SpriteCharacter src={ pegasus } ></SpriteCharacter>
      </SpriteWrapper>
    </SpriteModal>
  )
}

const animate = keyframes`
from{
  transform: translate3d(0px,0,0)
}
to{
  transform: translate3d(-100%,0,0)
}
`;
const SpriteModal = styled.div`
background-color: rgba(0,0,0,0.4);
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
`;
const SpriteWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: calc(1024px / 4);
height: calc(751px / 4);
overflow: hidden;
`;
const SpriteCharacter = styled.img`
animation: ${animate} 1s steps(4) infinite;
`;
