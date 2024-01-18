import "./ButtonStyle.css";

const NormalButton = ({ cardId, type, buttonName, onClickButtonHandler }) => {
    return (
        <button
            type={type}
            className="submit-button"
            onClick={(event) => onClickButtonHandler(event, cardId, type)}
        >
            {buttonName}
        </button>
    );
};
export default NormalButton;
