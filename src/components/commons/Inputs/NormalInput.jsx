import "../Styles/InputStyle.css";

const NormalInput = ({ labelName, onChangeTitle, onChangeContent, value }) => {
    return (
        <label className="input-label">
            {labelName}
            <input
                className="todo-input"
                onChange={
                    labelName === "제목" ? onChangeTitle : onChangeContent
                }
                value={value}
            />
        </label>
    );
};
export default NormalInput;
