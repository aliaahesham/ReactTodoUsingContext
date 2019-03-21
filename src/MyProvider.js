import React from 'react';

export const TodoContext = React.createContext();

export default class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.addToDo = this.addToDo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
    }

    addToDo(task) {
        const { data } = this.state;
        this.setState({ data: [...data.concat(task)] });
    }

    toggleDone(id) {
        const { data } = this.state;
        const newData = data.slice();
        const index = newData.findIndex((item) => (item.id === id));
        newData[index].done = !newData[index].done;
        this.setState({data: newData });
    }

    toggleDelete(id) {
        const { data } = this.state;
        const newData = data.slice();
        const index = newData.findIndex((item) => (item.id === id));
        newData[index].deleted = !newData[index].deleted;
        this.setState({data: newData });
    }

    render() {
        return (
            <TodoContext.Provider value={{
                data: this.state.data,
                addToDo: this.addToDo,
                toggleDone: this.toggleDone,
                toggleDelete: this.toggleDelete,
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}