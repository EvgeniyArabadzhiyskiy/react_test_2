import "./TodoList.scss";
import classNames from "classnames";

const ToduList = ({ todos, onBtnClick, onToggleComplited }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, task, complited }) => {
        return (
          <li
            key={id}
            className={classNames("TodoList__item", {
              TodoList__item__completed: complited,
            })}
          >
            <input
              type="checkbox"
              className="TodoList__checkbox"
              checked={complited}
              onChange={(evt) => onToggleComplited(id)}
            />
            <p className="TodoList__text">{task}</p>

            <button
              className="TodoList__btn"
              type="button"
              onClick={() => onBtnClick(id)}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToduList;
