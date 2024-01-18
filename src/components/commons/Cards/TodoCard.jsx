import DeleteButton from "../Buttons/DeleteButton";
import NormalButton from "../Buttons/NormalButton";
import "./TodoCardStyle.css";
const TodoCard = ({ cardId, title, content, onClickButtonHandler }) => {
    return (
        <article key={cardId} className="card-wrapper">
            <div className="button-wrapper">
                <NormalButton
                    type={"done"}
                    cardId={cardId}
                    onClickButtonHandler={onClickButtonHandler}
                />
                <DeleteButton
                    cardId={cardId}
                    onClickButtonHandler={onClickButtonHandler}
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
