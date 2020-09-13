import { SingleStageTest } from '@/single-stage-test';

describe('Single stage test', () => {
  it('should work', () => {
    const test = new SingleStageTest([0, 1, 2, 3, 4, 5, 6, 7]);

    expect(test).toBeTruthy();
  });
});
