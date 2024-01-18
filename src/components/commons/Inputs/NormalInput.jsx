import "../Styles/InputStyle.css";

const NormalInput = ({ labelName, onChangeTitle, onChangeContent, value }) => {
    return (
        <div className="wrapper">
            <label>{labelName}</label>
            <input
                onChange={
                    labelName === "제목" ? onChangeTitle : onChangeContent
                }
                value={value}
            />
        </div>
    );
};
export default NormalInput;
