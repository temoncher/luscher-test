import { SingleStageTest } from './single-stage-test';

const newTest = new SingleStageTest([1, 4, 0, 7, 2, 3, 5, 6]);

const interpretations = newTest.interpret();

console.log(interpretations);

export { SingleStageTest };

// TODO: write tests
