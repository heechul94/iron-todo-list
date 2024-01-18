const DeleteButton = ({ cardId, onClickButtonHandler }) => {
    const buttonType = "delete";
    return (
        <button
            onClick={(event) => onClickButtonHandler(event, cardId, buttonType)}
        >
            삭제
        </button>
    );
};
export default DeleteButton;
