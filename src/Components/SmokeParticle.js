import React from 'react'
import styled from 'styled-components';

export default function SmokeParticle({ show }) {
  return (
    <Modal onClick={() => show(false)}>
      <Canv id='witcher-smoke' />
    </Modal>
  )
}
const Modal = styled.div`
background-color: rgba(0,0,0,0.4);
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
`;
const Canv = styled.canvas`
position: absolute;
top: 50%;
left: 50%;
width: 522px; 
height: 353px;
transform: translate(-50%, -50%);
border: 1px solid black;
`;
