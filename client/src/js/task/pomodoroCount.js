import taskState from './taskState';
import timerState from '../timer/timerState';
import taskRender from './taskRender';

export default () => {
  if (!taskState.tasks.length) {
    timerState.curRepeat++;
  } else {
    taskState.tasks = taskState.tasks.map(v => {
      if (v.active) {
        return { ...v, actPomodoro: ++v.actPomodoro };
      }
      return v;
    });
    taskRender();
  }
};