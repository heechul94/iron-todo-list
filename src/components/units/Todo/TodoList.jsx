import { useState } from "react";
import NormalButton from "../../commons/Buttons/NormalButton";
import TodoCard from "../../commons/Cards/TodoCard";
import NormalInput from "../../commons/Inputs/NormalInput";
import "./TodoListStyle.css";

const TodoList = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todos, setTodo] = useState([]);

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeContent = (event) => {
        setContent(event.target.value);
    };
    const onClickAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            id: todos.length + 1,
            title,
            content,
        };
        if (todos.length === 0) {
            setTodo([newTodo]);
        } else {
            setTodo([...todos, newTodo]);
        }
        setTitle("");
        setContent("");
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
                    onClickAddTodo={onClickAddTodo}
                />
            </form>
            <section className="working-content-wrapper">
                Working...
                {todos.map((item) => (
                    <TodoCard
                        key={item.id}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </section>
            <section className="done-content-wrapper">
                Done!!
                <TodoCard title={"제목"} content={"내용"} />
            </section>
        </div>
    );
};
export default TodoList;
