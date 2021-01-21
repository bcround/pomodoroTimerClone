import addTodo from './addTodo';
import deleteTask from './deleteTask';
import checkTask from './checkTask';
import deleteCompletedTask from './deleteCompletedTask';
import currentTask from './currentTask';

export default () => {
  addTodo();
  deleteTask();
  checkTask();
  deleteCompletedTask();
  currentTask();
};