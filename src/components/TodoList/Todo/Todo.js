const Todo = ({ complited, task, onToggle, onTodoClick }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={complited}
        onChange={onToggle}
      />
      <p className="TodoList__text">{task}</p>

      <button className="TodoList__btn" type="button" onClick={onTodoClick}>
        Удалить
      </button>
    </>
  );
};

export default Todo;
