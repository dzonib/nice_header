import styled from 'styled-components'

export const StyledNav = styled.ul`
  transition: all 0.5s;
  display: flex;
  margin: 0;
  font-size: ${props => console.log(props) || props.scrolled ? "2rem" : "3rem"};
  li {
    list-style-type: none;
    padding: 2rem;
    font-weight: 600;

    &:hover {
      background: #201c29;
      cursor: pointer;
    }
  }

`