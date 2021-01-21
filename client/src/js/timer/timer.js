import { selectMode } from './selectMode';
import timerCountdown from './timerCountdown';
import progress from './progress';

export default () => {
  selectMode();
  timerCountdown();
  progress();
};