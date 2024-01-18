import NormalButton from "../../commons/Buttons/NormalButton";
import TodoCard from "../../commons/Cards/TodoCard";
import NormalInput from "../../commons/Inputs/NormalInput";
import "../../commons/Styles/TodoListStyle.css";

const TodoListUI = ({
    title,
    content,
    todo,
    onChangeTitle,
    onChangeContent,
    onClickButtonHandler,
}) => {
    return (
        <div className="todo-wrapper">
            <form className="card-input-wrapper">
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
            <span>Working...</span>
            <section className="working-content-wrapper">
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
            <span>Done!!</span>
            <section className="done-content-wrapper">
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
export default TodoListUI;
