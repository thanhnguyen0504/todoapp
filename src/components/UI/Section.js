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
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-3rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }
  
`;


const Section = (props) => {
  return <MySection>{props.children}</MySection>;
};

export default Section;
