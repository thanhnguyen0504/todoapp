import styled from "styled-components";

const Input = styled.input`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  border-radius: 5px;
  transition: width .35s linear;
`;

export default Input;