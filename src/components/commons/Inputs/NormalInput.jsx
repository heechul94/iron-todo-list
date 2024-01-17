import "./InputStyle.css";

const NormalInput = ({ labelName, onChangeTitle, onChangeContent }) => {
    return (
        <div className="wrapper">
            <label>{labelName}</label>
            <input
                onChange={
                    labelName === "제목" ? onChangeTitle : onChangeContent
                }
            />
        </div>
    );
};
export default NormalInput;
