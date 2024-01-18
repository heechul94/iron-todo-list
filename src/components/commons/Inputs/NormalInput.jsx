import "../Styles/InputStyle.css";

const NormalInput = ({ labelName, onChangeTitle, onChangeContent, value }) => {
    return (
        <div className="input-wrapper">
            <label className="input-label">{labelName}</label>
            <input
                className="todo-input"
                onChange={
                    labelName === "제목" ? onChangeTitle : onChangeContent
                }
                value={value}
            />
        </div>
    );
};
export default NormalInput;
