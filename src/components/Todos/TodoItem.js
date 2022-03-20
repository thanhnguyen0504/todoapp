import { useDispatch } from 'react-redux';
import { todoActions } from '../../store';
import Button from "../UI/Button";
import Li from "../UI/Li";
import { useEffect, useState } from "react";


const DeleteButton = props => {
  return <Button onClick={ () => props.onClick(props.id) }>{props.children}</Button>
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
      <DeleteButton id={id} onClick={onDeleteHandler}>
        x
      </DeleteButton>
    </Li>
  );
  
};

export default TodoItem;