import React from 'react';
import MyProvider from './MyProvider'
import TodoList from './components/Home/ToDoList';
import Done from './components/Home/Done';
import Deleted from './components/Home/Deleted';


const App = props => (
    <MyProvider>
        <TodoList/>
        <Done/>
        <Deleted/>
    </MyProvider>
);
export default App;
