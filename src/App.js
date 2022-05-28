// import React, { Component } from "react";
// import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
// import PaintingList from "./components/PaintingList/PaintingList";
// import paintings from "./components/paintings.json";
// import ButtonPaint from "./components/ButtonPaint";
import ColorPicker from "./components/ColorPicker/ColorPicker";
// import Alert from "./components/Alert/Alert";
// import Profile from "components/Profile/Profile";
// import user from "components/Profile/user.json";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown"

// import Modal from "./components/Alls/Modal/Modal";
// import Tabs from "./components/Alls/Tabs/Tabs";
// import tabs from './tabs.json'
// import { ReactComponent as AddIcon } from "./icons svg/add.svg";


// import initialTodos from "./todos.json";
// import TodoList from "./components/TodoList/TodoList/TodoList";
// import Form from "./components/TodoList/Form/Form";
// import Filter from "./components/TodoList/Filter/Filter";
// import shortid from "shortid";
// import IconButton from "./components/IconButton/IconButton";


import returnIcon from './icons svg/return.png'
import settingsIcon from './icons svg/settings.png'
import trashIcon from './icons svg/trash.png'
const colorPickerOptions = [
  { label: "red", color: "#F44336", image: returnIcon},
  { label: "green", color: "#4CAF50", image: settingsIcon},
  { label: "blue", color: "#2196F3", image: trashIcon},
  { label: "grey", color: "#607D8B", image: returnIcon},
  { label: "pink", color: "#E91E63", image: settingsIcon},
  { label: "indigo", color: "#3F51B5", image: trashIcon},
];



export default function App(props) {
  return (
    <div>
      <Container>
        {/* <Section title="Топ недели"> */}

          {/* <Modal />  */}
          {/* <Dropdown /> */}
          {/* <Counter initialValue={10} /> */}
          <ColorPicker options={colorPickerOptions} />
          {/* <Alert text="Шеф всё пропало!" type="error" /> */}
          {/* <Alert text="Шеф всё пропало!" type="warning" /> */}
          {/* <Alert text="Шеф всё пропало!" type="success" /> */}
        {/* </Section> */}

        {/* <PaintingList items={paintings} /> */}
        {/* <ButtonPaint type="button" disabled={false} label="Click Me" /> */}
        {/* <Section title="The Best" classes="is-hidden open">

        </Section> */}
      </Container>
    </div>
  );
}


// class App extends Component {
//   state = {
//     todos: [], // Массив из .Json [{ id: "1", task: "Выучить HTML", complited: true}]
//     filter: "",
//     isOpen: false,
//   };

//   handleSubmit = (text) => {
//     this.setState((prevState) => {
//       const addTask = {
//         id: shortid.generate(),
//         task: text,
//         complited: false,
//       };

//       return { todos: [addTask, ...prevState.todos] };
//     });
//   };

//   deleteTask = (id) => {
//     this.setState((prevState) => {
//       return {
//         todos: prevState.todos.filter((todo) => id !== todo.id),
//       };
//     });
//   };

//   toggleComplitd = (data) => {
//     this.setState((prevState) => {
//       return {
//         todos: prevState.todos.map((todo) => {
//           return todo.id === data
//             ? { ...todo, complited: !todo.complited }
//             : todo;
//         }),
//       };
//     });
//   };

//   changeFilter = (evt) => {
//     this.setState({
//       filter: evt.currentTarget.value,
//     });
//   };

//   getVisibleTodos = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();

//     return this.state.todos.filter((todo) => {
//       return todo.task.toLowerCase().includes(normalizedFilter);
//     });
//   };

//   componentDidMount() {
//     const localTodos = localStorage.getItem("todos");
//     const parsed = JSON.parse(localTodos);

//     if (parsed) {
//       this.setState({ todos: parsed });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem("todos", JSON.stringify(this.state.todos));
//     }

//     const currentTodo = this.state.todos;
//     const prevTodo = prevState.todos;
//     if (currentTodo.length > prevTodo.length && prevTodo.length !== 0) {
//       this.toggle();
//     }
//   }

//   toggle = () => {
//     this.setState((prevState) => {
//       return {
//         isOpen: !prevState.isOpen,
//       };
//     });
//   };

//   render() {
//     const { todos } = this.state;
//     const allTodos = todos.length;
//     const ComplitedTodo = todos.reduce((acc, todo) => {
//       return todo.complited ? acc + 1 : acc;
//     }, 0);

//     const visibleTodos = this.getVisibleTodos();

//     return (
//       <>
//         <div>
//           {/* <button type="button" className="btn-modal" onClick={this.toggle}>
//             Open
//           </button> */}

//           <IconButton onClick={this.toggle} aria-label="Добавить заметку">
//             {<AddIcon width="40" height="40"  />}
//           </IconButton>

//           {this.state.isOpen && (
//             <Modal onToggle={this.toggle}>
//               <Form
//                 dataTodo={this.state.todos}
//                 onHandleSubmit={this.handleSubmit}
//                 onCloseForm={this.toggle}
//               />
//             </Modal>
//           )}
//         </div>

//         <div>
//           <div>
//             <p>Общее количество: {allTodos}</p>
//             <p>Количество выполненных: {ComplitedTodo}</p>
//           </div>

//           <Filter
//             filterValue={this.state.filter}
//             onFilterHandler={this.changeFilter}
//           />

//           <TodoList
//             todos={visibleTodos}
//             onBtnClick={this.deleteTask}
//             onToggleComplited={this.toggleComplitd}
//           ></TodoList>
//         </div>
//       </>
//     );
//   }
// }

// export default App;