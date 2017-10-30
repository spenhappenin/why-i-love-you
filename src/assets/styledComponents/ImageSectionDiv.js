import styled from 'styled-components';

export default styled.div`
  background-image: url(${ props => props.backgroundImage });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
`