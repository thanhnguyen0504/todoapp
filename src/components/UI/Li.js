import styled from "styled-components";

const Li = styled.li`
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  align-items: center;
  justify-content: center;

  &:last-of-type {
    border-bottom: none;
  }

  & span {
    width: 95%;
    text-decoration: ${props => props.active === true ? "" : "line-through"};
    text-align: left;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  &.fadeIn {
    animation: fadeIn 600ms;
  }

  @keyframes bump {
    0% {
        transform: scale(1);
    }
    10% {
        transform: scale(0.9);
    }
    30% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
  }

  @keyframes fadeIn {
    from {opacity:0;}
    to {opacity:1;}
  }

  @keyframes fadeOut {
    from {opacity:1;}
    to {opacity:0;}
  }

`;



export default Li;