const DeleteButton = ({ cardId, onClickDeleteTodo }) => {
    return <button onClick={() => onClickDeleteTodo(cardId)}>삭제</button>;
};
export default DeleteButton;
