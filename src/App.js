import React, { useState } from 'react';
import TodoForm from './components/NewTask/TodoForm';
import Todos from './components/Todos/Todos';
import { ThemeProvider } from 'styled-components'
import {useSelector } from 'react-redux';
import Button from './components/UI/Button';
import Wrapper from './components/UI/Wrapper';


const lightTheme = {
  fg: "#302f2c",
  bg: "#f5eded",
  sectionfg: '#302f2c',
  sectionbg: '#fff',
  sectionShadow: '#ebdfdf',
  buttonbg: '#f5eded',
  buttonSelectedBg: '#8197e3',
  buttonHover: '#8197e3',
};

const darkTheme = {
  fg: "#f5eded",
  bg: "#302f2c",
  sectionfg: '#fff',
  sectionbg: '#1f1d1d',
  sectionShadow: '#3d3737',
  buttonbg: '#3d3636',
  buttonSelectedBg: '#8197e3',
  buttonHover: '#8197e3',
};



function App() {

  const {todos, addCount} = useSelector(state => state.todo);
  const [isDark, setIsDark] = useState(false);

  const changeThemeHandler = () => {
    setIsDark(!isDark);
  }

  return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Wrapper>  
          <Button onClick={changeThemeHandler}>{isDark ? 'Dark': 'Light'}</Button>
          <TodoForm/>
          <Todos
            todos={todos} addCount={addCount}
          />
        </Wrapper>
      </ThemeProvider>
  );
}

export default App;
