import styled from 'styled-components'


export const StyledHeader = styled.div`
  height: ${props => props.scrolled && "60px"};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #100e17;
  color: white;
  box-shadow: 0 4px 3px rgba(0,0,0,.5);
  align-items: center;
  z-index: 1000;
  .logo {
    transition: all 0.5s;
    font-size: ${props => props.scrolled ? "2.7rem" : "3.5rem"};
    margin-left: 100px;
    font-style: italic;
  }
`