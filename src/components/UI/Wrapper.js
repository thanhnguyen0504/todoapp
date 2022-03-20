import styled from "styled-components";

const DivMaster = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  height: 100vh;
  display: flex;
  justify-content: center;
  & .appzone {
    width: 800px;
    max-width: 800px;
    padding: 0;
  }
`;

const Wrapper = (props) => {
  return (
    <DivMaster>
      <div className="appzone">
        {props.children}
      </div>
    </DivMaster>
  );
}

export default Wrapper;