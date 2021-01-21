import addTodo from './addTodo';
import checkTask from './checkTask';
import deleteTask from './deleteTask';
import checkTask from './checkTask';
import deleteCompletedTask from './deleteCompletedTask';
import currentTask from './currentTask';

export default () => {
  addTodo();
  checkTask();
  deleteTask();
  checkTask();
  deleteCompletedTask();
  currentTask();
};