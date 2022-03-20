import { useState } from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store';
import Input from '../UI/Input';

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  & input {
    font:inherit;
    padding: 0.25rem;
    border: none;
    border-bottom: 3px solid #ccc;
    flex: 1;
    margin-right: 2rem;

    &:focus {
      outline: none;
      border-color: #7a0144;
    } 
  }
`; 

const TaskForm = (props) => {
  
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = text;
    if (enteredValue.trim().length > 0) {
      dispatch(todoActions.add({text: enteredValue}));
    }
    setText("");
  };

  const textchangeHandler = (event) => {
    const enteredValue = event.target.value;
    setText(enteredValue);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input type='text' value={text} onChange={textchangeHandler}/>
    </Form>
  );
};

export default TaskForm;
