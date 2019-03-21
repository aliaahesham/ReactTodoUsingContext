import React from 'react';
import uuidv4 from 'uuid/v4';

import { TodoContext } from '../../MyProvider';

export default class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({ task: value });
    }

    handleSubmit = (addToDo) => (e) => {
        e.preventDefault();
        const task = {
            text: this.state.task,
            done: false,
            deleted: false,
            id: uuidv4()
        };
        addToDo(task);
        this.setState({ task: '' })
    }
    render() {
        return (
            <TodoContext.Consumer>
                {(context) => (
                    <form onSubmit={this.handleSubmit(context.addToDo)}>
                        <input type="text" placeholder="Add Task" name="task" onChange={this.handleChange} value={this.state.task} />
                        <button>Add</button>
                    </form>
                )}
            </TodoContext.Consumer>

        );
    }
}