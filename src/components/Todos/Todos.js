import Section from '../UI/Section';
import styled from "styled-components";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store';
import Button from '../UI/Button';
import TodoList from './TodoList';

const Filter = {
  ALL: 1,
  ACTIVE: 2,
  DONE: 3,
};

const Div = styled.div`
  text-align: center;
  height: 350px;
`;

const Action = styled.div`
  display: flex;
`;

const ActionButton = props => {
  return <Button isSelected={props.isSelected} onClick={ () => props.onClick(props.action) }>{props.children}</Button>
};

const Todos = (props) => {
  const noTodos = <h2>No todos found!</h2>;
  const { addCount } = useSelector(state => state.todo);
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

  const onFilterHandler = (action) => {
    setFilter(action);
  };

  const onToggleAllHandler = () => {
    dispatch(todoActions.toggleAll());
  };

  return (
    <Section>
      <Div>{todoFiltered.length > 0 ? <TodoList todoFiltered={todoFiltered} addCount={addCount}></TodoList> : noTodos}</Div>
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
