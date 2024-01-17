import DeleteButton from "../Buttons/DeleteButton";
import "./TodoCardStyle.css";
const TodoCard = ({ cardId, title, content, onClickDeleteTodo }) => {
    return (
        <article key={cardId} className="card-wrapper">
            <div className="button-wrapper">
                <DeleteButton
                    cardId={cardId}
                    onClickDeleteTodo={onClickDeleteTodo}
                />
            </div>
            <div className="content-wrapper">
                <span className="card-text">{title}</span>
                <span className="card-text">{content}</span>
            </div>
        </article>
    );
};
export default TodoCard;
