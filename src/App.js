import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Management App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  )
}

export default App;