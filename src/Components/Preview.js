import React from 'react'
import styled from 'styled-components';
import useMousePosition from '../Hooks/useMousePosition'

export default function Preview({ message, display }) {

  const { x, y } = useMousePosition();

  return (
    <Tooltip style={{ left: x - 25, top: y - 50 }} display={display}>
      {message}
    </Tooltip>
  )
}
const Tooltip = styled.div`
${props => !props.display ? 'display: none;' : ''}
position: absolute;
border: 1px solid #4e4e4e;
padding: 12px 16px;
z-index: 1;
background-color: #1d1d1d;
color: white;
font-size: 1.7vh;
`;
