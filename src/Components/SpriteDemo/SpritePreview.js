import React from 'react'
import styled from 'styled-components';

export default function SpritePreview({ x, y }) {
  return (
    <Preview style={{ left: x, top: y - 25 }}>
      Preview
    </Preview>
  )
}
const Preview = styled.div`
position: absolute;
`;
