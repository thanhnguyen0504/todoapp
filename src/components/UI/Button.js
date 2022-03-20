import styled from "styled-components";

const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 1px solid ${props => props.theme.fg};
  background-color: ${props => props.theme.buttonbg};

  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border-radius: 3px;
  background-color: ${props => props.isSelected === true ? props.theme.buttonSelectedBg : props.theme.buttonbg} ;
  &:hover {
    background-color: ${props => props.theme.buttonHover}
  }
`;

export default Button;