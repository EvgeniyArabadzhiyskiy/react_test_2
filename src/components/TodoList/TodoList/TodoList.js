import "./TodoList.scss";
import classNames from "classnames";
import Todo from "../Todo";

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
            <Todo
              complited={complited}
              task={task}
              onTodoClick={() => onBtnClick(id)}
              onToggle={() => onToggleComplited(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ToduList;
