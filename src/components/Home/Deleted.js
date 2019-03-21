import React from 'react';
import { TodoContext } from '../../MyProvider';

import TaskCard from './Card';

export default class DeletedList extends React.Component {
    render() {
        return (
            <TodoContext.Consumer>
                {(context) => (
                    <>
                        <h1>Deleted</h1>
                        {
                            context.data.filter(t => t.deleted).map(t => <TaskCard key={t.id} {...t} />)
                        }
                    </>
                )}
            </TodoContext.Consumer>
        );
    }

}