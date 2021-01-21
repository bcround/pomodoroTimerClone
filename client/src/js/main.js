import foo from './addTodo';

export default {
  tasks: [
    {
      id: 1,
      content: 'html',
      completed: true,
      pomodoro: 0,
      noteActive: false,
      note: ''
    },
    {
      id: 2,
      content: 'css',
      completed: false,
      pomodoro: 0,
      noteActive: false,
      note: ''
    },
    {
      id: 3,
      content: 'js',
      completed: true,
      pomodoro: 0,
      noteActive: false,
      note: ''
    }
  ]
};

foo();