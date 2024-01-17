import DeleteButton from "../Buttons/DeleteButton";
import "./TodoCardStyle.css";
const TodoCard = ({ title, content }) => {
    return (
        <article className="card-wrapper">
            <div className="button-wrapper">
                <DeleteButton />
            </div>
            <div className="content-wrapper">
                <span className="card-text">{title}</span>
                <span className="card-text">{content}</span>
            </div>
        </article>
    );
};
export default TodoCard;
