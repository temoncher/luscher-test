import { SingleStageTest } from '@/single-stage-test';
import { firstFixture } from './fixtures/single-stage-test/first-fixture';

describe('[Single stage] First fixture', () => {
  it('should return interpretation correctly', async () => {
    const test = new SingleStageTest(firstFixture.selection);

    expect(test.interpret()).resolves.toStrictEqual(firstFixture.interpretation);
  });
});
