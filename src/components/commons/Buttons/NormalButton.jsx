import "../Styles/ButtonStyle.css";

const NormalButton = ({
    cardId,
    type,
    buttonName,
    onClickButtonHandler,
    isDone,
    status,
}) => {
    return (
        <button
            type={type}
            className={
                status === "done" && !isDone
                    ? "todo-done-button"
                    : status === "done" && isDone
                    ? "todo-cancel-button"
                    : "submit-button"
            }
            onClick={(event) => onClickButtonHandler(event, cardId, status)}
        >
            {status === "done" && !isDone
                ? "완료"
                : status === "done" && isDone
                ? "취소"
                : buttonName}
        </button>
    );
};
export default NormalButton;
