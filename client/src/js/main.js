import { foo } from './addTask';
import upAndDown from './estPomo';
import test from './_add_task_render';

export let state = {
  task: "",
  count: 0
};

upAndDown();
foo();
test();
