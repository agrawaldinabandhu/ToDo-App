import React, { Component } from "react";
import "./App.css";  // Import the CSS file
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            list: [],
        };
    }

    updateInput(value) {
        this.setState({ userInput: value });
    }

    addItem() {
        if (this.state.userInput.trim() !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput.trim(),
            };

            this.setState({
                list: [...this.state.list, userInput],
                userInput: "",
            });
        }
    }

    deleteItem(key) {
        const updateList = this.state.list.filter((item) => item.id !== key);
        this.setState({ list: updateList });
    }

    editItem = (index) => {
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            let updatedTodos = [...this.state.list];
            updatedTodos[index].value = editedTodo;
            this.setState({ list: updatedTodos });
        }
    };

    render() {
        return (
            <Container className="container">
                <h1>TODO LIST</h1>
                
                {/* Input Field and Add Button */}
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Add item..."
                        value={this.state.userInput}
                        onChange={(e) => this.updateInput(e.target.value)}
                    />
                    <button className="add-btn" onClick={() => this.addItem()}>
                        ADD
                    </button>
                </div>

                {/* List Items */}
                <ListGroup className="list-group">
                    {this.state.list.map((item, index) => (
                        <ListGroup.Item key={index} className="list-group-item">
                            {item.value}
                            <span className="list-btns">
                                <button
                                    className="edit-btn"
                                    onClick={() => this.editItem(index)}
                                >
                                    EDIT
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => this.deleteItem(item.id)}
                                >
                                    DELETE
                                </button>
                            </span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

export default App;
