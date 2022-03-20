import { reducer, actions } from './todo';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
        todos: [],
        addCount: 0
    }
  )
})

test('should handle a todo being added to an empty list', () => {
    
    const expectItemText = "First todo item";

    const previousState =  {
      todos: []
    };

    const res = reducer(previousState, actions.add({text: expectItemText}));

    expect(res.todos[0].text).toEqual(expectItemText);
    expect(res.todos[0].active).toEqual(true);
    
})


test('should handle a todo being added to an non-empty list', () => {
  

  const firstItemText = "First todo item";
  const expectSecondItemText = "second todo item";

  const previousState =  {
    todos: [ {  id : 0.1, text: firstItemText, active: true }]
  };

  const res = reducer(previousState, actions.add({text: expectSecondItemText}));

  expect(res.todos[1].text).toEqual(expectSecondItemText);
  expect(res.todos[1].active).toEqual(true);
  
})


test('should handle delete a todo item from non-empty list', () => {
  

  const firstItemText = "First todo item";
  const expectSecondItemText = "second todo item";

  const previousState =  {
    todos: [ 
              {  id : 0.1, text: firstItemText, active: true }, 
              {  id : 0.2, text: expectSecondItemText, active: true } 
           ]
  };

  const res = reducer(previousState, actions.delete({id: 0.2}));
  expect(res.todos.length).toEqual(1);
  
})


test('should handle marking done for a todo item from non-empty list', () => {

  const firstItemText = "First todo item";
  const expectSecondItemText = "second todo item";

  const previousState =  {
    todos: [ 
              {  id : 0.1, text: firstItemText, active: true }, 
              {  id : 0.2, text: expectSecondItemText, active: true } 
           ]
  };

  const res = reducer(previousState, actions.setDone({id: 0.2}));
  expect(res.todos[1].active).toEqual(false);
  
})

test('should handle toggle all (ACTIVE to DONE) for all todo item from non-empty list', () => {

  const firstItemText = "First todo item";
  const expectSecondItemText = "second todo item";

  const previousState =  {
    todos: [ 
              {  id : 0.1, text: firstItemText, active: true }, 
              {  id : 0.2, text: expectSecondItemText, active: false } 
           ]
  };

  const res = reducer(previousState, actions.toggleAll());
  expect(res.todos[0].active).toEqual(false);
  expect(res.todos[1].active).toEqual(false);
  
})

test('should handle toggle all (DONE to ACTIVE) for all todo item from non-empty list', () => {

  const firstItemText = "First todo item";
  const expectSecondItemText = "second todo item";

  const previousState =  {
    todos: [ 
              {  id : 0.1, text: firstItemText, active: false }, 
              {  id : 0.2, text: expectSecondItemText, active: false } 
           ]
  };

  const res = reducer(previousState, actions.toggleAll());
  expect(res.todos[0].active).toEqual(true);
  expect(res.todos[1].active).toEqual(true);
  
})