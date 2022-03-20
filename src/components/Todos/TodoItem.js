import { useDispatch } from 'react-redux';
import { todoActions } from '../../store';
import Li from "../UI/Li";
import DeleteButton from '../UI/DeleteButton';
import { useEffect, useState } from "react";


const Button = props => {
  return <DeleteButton onClick={ () => props.onClick(props.id) }>{props.children}</DeleteButton>
};

const Text = props => {
  return <span onClick={ () => props.onClick(props.id) }>{props.children}</span>
};

const TodoItem = (props) => {
  const {text, active, id} = props;
  const dispatch = useDispatch();
  const [isFadeIn, setIsFadeIn] = useState(false);

  const onDeleteHandler = (id) => {
    setIsFadeIn(true);
    dispatch(todoActions.delete({id}));
  };

  const onDoneHandler = (id) => {
    dispatch(todoActions.setDone({id}));
  };

  useEffect(() => {
    setIsFadeIn(true);
    setTimeout(() => {
      setIsFadeIn(false);
    }, 300)
  }, [active]);

  return (
    <Li className={isFadeIn ? "fadeIn" : ''} active={active}>
      <Text id={id} onClick={onDoneHandler}>{text}</Text>
      <Button id={id} onClick={onDeleteHandler}>
        x
      </Button>
    </Li>
  );
  
};

export default TodoItem;