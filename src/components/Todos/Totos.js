import Section from '../UI/Section';
import TodoItem from './TodoItem';
import styled from "styled-components";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store';
import Button from '../UI/Button';
import List from '../UI/List';

const Filter = {
  ALL: 1,
  ACTIVE: 2,
  DONE: 3,
};

const Div = styled.div`
  text-align: center;
`;

const Action = styled.div`
  display: flex;
`;

const ActionButton = props => {
  return <Button isSelected={props.isSelected} onClick={ () => props.onClick(props.action) }>{props.children}</Button>
};



const Todos = (props) => {
  let taskList = <h2>No todos found!</h2>;

  const dispatch = useDispatch();

  const [filter, setFilter] = useState(Filter.ALL);
  let todoFiltered = [];
  
  switch (filter) {
    case Filter.ACTIVE:
      todoFiltered = props.todos.filter(x => x.active === true);
      break;
    case Filter.DONE:
      todoFiltered = props.todos.filter(x => x.active === false);
      break;  
    default:
      todoFiltered = props.todos;
      break;
  }

  if (todoFiltered.length > 0) {
    taskList = (
      <List>
        {todoFiltered.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} active={todo.active} text={todo.text}/>
        ))}
      </List>
    );
  }

  const onFilterHandler = (action) => {
    setFilter(action);
  };

  const onToggleAllHandler = () => {
    dispatch(todoActions.toggleAll());
  };

  return (
    <Section>
      <Div>{taskList}</Div>
      <Action>
        <Button onClick={onToggleAllHandler}>Toggle All</Button>
      </Action>
      <Action>
        <ActionButton action={Filter.ALL} isSelected={filter === Filter.ALL} onClick={onFilterHandler}>All</ActionButton>
        <ActionButton action={Filter.ACTIVE} isSelected={filter === Filter.ACTIVE} onClick={onFilterHandler}>Active</ActionButton>
        <ActionButton action={Filter.DONE} isSelected={filter === Filter.DONE} onClick={onFilterHandler}>Done</ActionButton>        
      </Action>    
    </Section>
  );
};

export default Todos;
