import { useState } from "react";
import NormalButton from "../../commons/Buttons/NormalButton";
import TodoCard from "../../commons/Cards/TodoCard";
import NormalInput from "../../commons/Inputs/NormalInput";
import "./TodoListStyle.css";

const TodoList = () => {
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
    console.log(todo);
    return (
        <div className="wrapper">
            <form className="input-wrapper">
                <NormalInput
                    labelName={"제목"}
                    onChangeTitle={onChangeTitle}
                    value={title}
                />
                <NormalInput
                    labelName={"내용"}
                    onChangeContent={onChangeContent}
                    value={content}
                />
                <NormalButton
                    type={"submit"}
                    buttonName={"추가하기"}
                    onClickButtonHandler={onClickButtonHandler}
                />
            </form>
            <section className="working-content-wrapper">
                Working...
                {todo
                    ?.filter((item) => item.isDone === false)
                    ?.map((item) => (
                        <TodoCard
                            key={item.id}
                            cardId={item.id}
                            isDone={item.isDone}
                            title={item.title}
                            content={item.content}
                            onClickButtonHandler={onClickButtonHandler}
                        />
                    )) || <div />}
            </section>
            <section className="done-content-wrapper">
                Done!!
                {todo
                    ?.filter((item) => item.isDone === true)
                    ?.map((item) => (
                        <TodoCard
                            key={item.id}
                            cardId={item.id}
                            isDone={item.isDone}
                            title={item.title}
                            content={item.content}
                            onClickButtonHandler={onClickButtonHandler}
                        />
                    )) || <div />}
            </section>
        </div>
    );
};
export default TodoList;
