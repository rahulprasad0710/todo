import React, { useEffect, useState } from "react";

const ToDoApp = () => {
    const [todo, setTodo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const handleChange = (event) => {
        setTodo(event.target.value);
    };
    const handleAdd = () => {
        if (todo === "") return;
        const todoItem = {
            id: Math.ceil(Math.random() * 10000),
            desc: todo,
            isComplete: false,
        };
        const tempList = [...toDoList, todoItem];
        setToDoList(tempList);
        setTodo("");
    };

    const handleDelete = (todoId) => {
        // console.log("handle dele", todoId);
        const tempToDoList = toDoList;
        const newToDoList = tempToDoList.filter((item) => item.id !== todoId);
        setToDoList(newToDoList);
        // console.log(newToDoList, "newToDoList");
    };

    const handleToggleIsComplete = (selectedId) => {
        const tempToDoList = toDoList;
        const newToDoList = tempToDoList.map((item) => {
            if (item.id === selectedId) {
                return {
                    ...item,
                    isComplete: !item.isComplete,
                };
            } else {
                return item;
            }
        });

        setToDoList(newToDoList);
    };

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-12 col-md-8 offset-md-2'>
                    <h3>To DO App</h3>
                    <div className=' shadow shadow-sm mb-3'>
                        <div class='input-group mb-3'>
                            <input
                                onChange={(event) => handleChange(event)}
                                type='text'
                                value={todo}
                                className='form-control'
                            />
                            <span
                                onClick={handleAdd}
                                className={
                                    todo === ""
                                        ? "input-group-text btn  btn-success disabled"
                                        : "input-group-text btn  btn-success"
                                }>
                                Add
                            </span>
                        </div>
                        <div>
                            <ul class='list-group'>
                                {toDoList.length > 0 &&
                                    toDoList.map((item, index) => {
                                        return (
                                            <div
                                                key={item.id}
                                                class='d-flex justify-content-between align-content-center mb-2 px-2'>
                                                <div
                                                    className={
                                                        item.isComplete
                                                            ? "text-decoration-line-through"
                                                            : ""
                                                    }>
                                                    <span>{index + 1}.</span>
                                                    {item.desc}
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                item.id
                                                            )
                                                        }
                                                        className='btn btn-sm btn-danger'>
                                                        <i class='fa-solid fa-trash'></i>
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleToggleIsComplete(
                                                                item.id
                                                            )
                                                        }
                                                        className='btn btn-sm btn-info ms-2'>
                                                        {item.isComplete ? (
                                                            <i class='fa-solid fa-check-double text-success'></i>
                                                        ) : (
                                                            <i class='fa-solid fa-check'></i>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoApp;
