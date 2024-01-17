import "./ButtonStyle.css";

const NormalButton = ({ type, buttonName, onClickAddTodo }) => {
    return (
        <button type={type} className="submit-button" onClick={onClickAddTodo}>
            {buttonName}
        </button>
    );
};
export default NormalButton;
