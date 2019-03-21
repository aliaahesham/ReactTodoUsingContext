import React from 'react';
import {TodoContext} from '../../MyProvider';

import AddToDo from './Add';
import TaskCard from './Card';

export default class ToDoList extends React.Component {
    render() {
        return (
            <TodoContext.Consumer >
                {(context) => (
                    <>
                        <h1>Doing</h1>
                        <AddToDo/>
                        {context.data.filter(t => !(t.done || t.deleted)).map(t => <TaskCard key={t.id} {...t} />)}
                    </>
                )}
            </TodoContext.Consumer>
        );
    }
}