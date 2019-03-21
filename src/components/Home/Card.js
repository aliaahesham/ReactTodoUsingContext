import React from 'react';
import { TodoContext } from '../../MyProvider';

export default class todoCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDone = (toggleDone) => () => {
        const id = this.props.id;
        toggleDone(id);
    }

    handleDelete = (toggleDelete) => () => {
        const id = this.props.id;
        toggleDelete(id);
    }
    render() {
        return (
            <TodoContext.Consumer>
                {(context) => (
                    <div>
                        <h2>{this.props.text}</h2>
                        {!this.props.deleted && <button onClick={this.handleDone(context.toggleDone)}>{this.props.done ? "UnDone" : "Done"}</button>}
                        <button onClick={this.handleDelete(context.toggleDelete)}>{this.props.deleted ? "ReStore" : "Delete"}</button>
                    </div>
                )}
            </TodoContext.Consumer>
        );
    }
}