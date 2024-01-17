import "./InputStyle.css";

const NormalInput = ({ labelName }) => {
    return (
        <div className="wrapper">
            <label>{labelName}</label>
            <input />
        </div>
    );
};
export default NormalInput;
