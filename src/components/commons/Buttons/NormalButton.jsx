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
            className="submit-button"
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
