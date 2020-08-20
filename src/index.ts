import 'module-alias/register';
import { SingleStageTest } from '@/single-stage-test/single-stage-test';

const newTest = new SingleStageTest([1, 2, 4, 5, 7, 6, 0, 3]);

console.log(newTest.result);
