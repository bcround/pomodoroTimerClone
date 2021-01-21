import foo from './addTodo';
import timerSettingModal from './timerSettingModal';
import timer from './timer/timer';

export default {
  tasks: [
    {
      id: 1,
      content: 'html',
      completed: true,
      pomodoro: 0,
      note: ''
    },
    {
      id: 2,
      content: 'css',
      completed: false,
      pomodoro: 0,
      note: ''
    },
    {
      id: 3,
      content: 'js',
      completed: true,
      pomodoro: 0,
      note: ''
    }
  ]
};

foo();
timerSettingModal();
timer();
