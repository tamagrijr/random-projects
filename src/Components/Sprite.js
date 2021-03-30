import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useKeypress from '../Hooks/useKeypress';
import useKeydown from '../Hooks/useKeydown';
import useKeyup from '../Hooks/useKeyup';
import idle from '../images/trump_idle.png';
import walk from '../images/trump_walk.png';
import run from '../images/trump_run.png';

export default function Sprite({ show }) {

  const [sheet, setSheet] = useState(idle);
  const [direction, setDirection] = useState('down');
  useKeypress('w', () => setDirection('up'));
  useKeypress('a', () => setDirection('left'));
  useKeypress('s', () => setDirection('down'));
  useKeypress('d', () => setDirection('right'));
  useKeydown('w', () => setSheet(walk));
  useKeyup('w', () => setSheet(idle));
  useKeydown('a', () => setSheet(walk));
  useKeyup('a', () => setSheet(idle));
  useKeydown('s', () => setSheet(walk));
  useKeyup('s', () => setSheet(idle));
  useKeydown('d', () => setSheet(walk));
  useKeyup('d', () => setSheet(idle));

  return (
    <Modal onClick={() => show(false)} >
      <Instructions>
        Click Anywhere to Exit <br/> <br/>
        W - Move Up <br/>
        A - Move Left<br/>
        S - Move Down<br/>
        D - Move Right<br/>
      </Instructions>
      <SpriteWrapper>
        <SpriteSheet src={ sheet } direction={direction} ></SpriteSheet>
      </SpriteWrapper>
    </Modal>
  )
}

const idle_walk = keyframes`
from{
  transform: translate3d(0px,0,0)
}
to{
  transform: translate3d(-100%,0,0)
}
`;
const Modal = styled.div`
background-color: rgba(0,0,0,0.4);
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
`;
const Instructions = styled.div`
position: absolute;
bottom: 2em;
left: 2em;
border: 1px solid #4e4e4e;
padding: 12px 16px;
z-index: 1;
background-color: #1d1d1d;
color: white;
font-size: 1.7vh;
`;
const SpriteWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: calc(2560px / 10);
height: calc(1024px / 4);
overflow: hidden;
`;
const SpriteSheet = styled.img`
animation: ${idle_walk} 1s steps(10) infinite;
position: absolute;
${props => props.direction === 'right' ? 'top: -256px;' : ''}
${props => props.direction === 'up' ? 'top: -512px;' : ''}
${props => props.direction === 'left' ? 'top: -768px;' : ''}
`;
