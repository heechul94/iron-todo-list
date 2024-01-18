import { useState } from "react";
import NormalButton from "../../commons/Buttons/NormalButton";
import TodoCard from "../../commons/Cards/TodoCard";
import NormalInput from "../../commons/Inputs/NormalInput";
import "./TodoListStyle.css";

const TodoList = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todo, setTodo] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const [doneTodo, setDoneTodo] = useState([]);

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeContent = (event) => {
        setContent(event.target.value);
    };

    const onClickButtonHandler = (event, id, type) => {
        if (type === "delete") {
            const temp = todo.filter((item) => item.id !== id);
            setTodo(...temp);
        } else if (type === "submit") {
            event.preventDefault();
            const newTodo = {
                id: Math.trunc(Math.random() * 1000),
                title,
                content,
            };
            if (todo.length === 0 || !todo) {
                setTodo([newTodo]);
            } else {
                setTodo([...todo, newTodo]);
            }
            setTitle("");
            setContent("");
        } else if (type === "done") {
        }
    };

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
                {todo?.map((item) => (
                    <TodoCard
                        key={item.id}
                        cardId={item.id}
                        isDone={isDone}
                        title={item.title}
                        content={item.content}
                        onClickButtonHandler={onClickButtonHandler}
                    />
                )) || <div />}
            </section>
            <section className="done-content-wrapper">
                Done!!
                {doneTodo?.map((item) => (
                    <TodoCard
                        key={item.id}
                        cardId={item.id}
                        isDone={isDone}
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
