import { useState } from "react";
import TodoListUI from "./TodoListUI";

const TodoListContainer = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todo, setTodo] = useState([]);

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeContent = (event) => {
        setContent(event.target.value);
    };

    const onClickButtonHandler = (event, id, status = "submit") => {
        if (status === "delete") {
            const temp = todo.filter((item) => item.id !== id);
            setTodo([...temp]);
        } else if (status === "submit") {
            event.preventDefault();
            const newTodo = {
                id: Math.trunc(Math.random() * 1000),
                title,
                content,
                isDone: false,
            };
            if (todo.length === 0 || !todo) {
                setTodo([newTodo]);
            } else {
                setTodo([...todo, newTodo]);
            }
            setTitle("");
            setContent("");
        } else if (status === "done") {
            const temp = todo.map((item) => {
                if (item.id === id) {
                    item.isDone = !item.isDone;
                }
                return item;
            });
            setTodo([...temp]);
        }
    };
    return (
        <TodoListUI
            title={title}
            content={content}
            todo={todo}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            onClickButtonHandler={onClickButtonHandler}
        />
    );
};
export default TodoListContainer;
