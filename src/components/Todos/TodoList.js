import { useRef, useEffect } from 'react';
import List from '../UI/List';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const todoFiltered = props.todoFiltered;
    const taskListRef = useRef(null);
    debugger;
    useEffect(() => {
        scrollToBottom();
    }, [props.addCount]);
    
    const scrollToBottom = () => {
        if(taskListRef.current?.scrollIntoView !== undefined) {
            taskListRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return (
        <List>
            {todoFiltered.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} active={todo.active} text={todo.text}/>
                ))
            }
            <div ref={taskListRef}/>
        </List>
    );

}

export default TodoList; 