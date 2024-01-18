import "../Styles/ButtonStyle.css";

const DeleteButton = ({ cardId, onClickButtonHandler }) => {
    const status = "delete";
    return (
        <button
            onClick={(event) => onClickButtonHandler(event, cardId, status)}
        >
            삭제
        </button>
    );
};
export default DeleteButton;
