import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store';
import Button from "../UI/Button";


const Span = styled.span`
      min-height: 1em;
`;

const DeleteButton = props => {
  return <Button onClick={ () => props.onClick(props.id) }>{props.children}</Button>
};

const Text = props => {
  return <Span onClick={ () => props.onClick(props.id) }>{props.children}</Span>
};

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
`;

const TodoItem = (props) => {
  const {text, active, id} = props;
  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(todoActions.delete({id}));
  };

  const onDoneHandler = (id) => {
    dispatch(todoActions.setDone({id}));
  };

  return (
    <Li active={active}>
      <Text id={id} onClick={onDoneHandler}>{text}</Text>
      <DeleteButton id={id} onClick={onDeleteHandler}>
        X
      </DeleteButton>
    </Li>
  );
  
};

export default TodoItem;