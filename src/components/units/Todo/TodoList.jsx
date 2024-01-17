import NormalButton from "../../commons/Buttons/NormalButton";
import TodoCard from "../../commons/Cards/TodoCard";
import NormalInput from "../../commons/Inputs/NormalInput";
import "./TodoListStyle.css";

const TodoList = () => {
    return (
        <div className="wrapper">
            <section className="input-wrapper">
                <NormalInput labelName={"제목"} />
                <NormalInput labelName={"내용"} />
                <NormalButton buttonName={"추가하기"} />
            </section>
            <section className="working-content-wrapper">
                Working...
                <TodoCard title={"제목"} content={"내용"} />
            </section>
            <section className="done-content-wrapper">
                Done!!
                <TodoCard title={"제목"} content={"내용"} />
            </section>
        </div>
    );
};
export default TodoList;
