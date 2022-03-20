import styled from "styled-components";

const MySection = styled.section`
  max-width: 40rem;
  max-height: 80rem;
  margin: 0.25em 1em;
  background-color: ${props => props.theme.sectionbg};
  padding: 1rem;
  border-radius: 12px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 8px ${props => props.theme.sectionShadow};
  
`;


const Section = (props) => {
  return <MySection>{props.children}</MySection>;
};

export default Section;
