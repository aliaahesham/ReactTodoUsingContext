import React from 'react';
import { TodoContext } from '../../MyProvider';

import TaskCard from './Card';

export default class DoneList extends React.Component {
    render() {
        return (
            <TodoContext.Consumer>
                {(context) => (
                    <>
                        <h1>Done</h1>
                        {context.data.filter(t => t.done && !t.deleted).map(t => <TaskCard key={t.id} {...t} />)}
                    </>
                )}

            </TodoContext.Consumer>
        );
    }

}