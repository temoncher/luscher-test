import { TwoStageTest } from '@/two-stage-test';
import { firstFixture } from './fixtures/two-stage-test/first-fixture';
import { secondFixture } from './fixtures/two-stage-test/second-fixture';
import { thirdFixture } from './fixtures/two-stage-test/third-fixture';

describe('[Two stage] First fixture', () => {
  it('should return emotional state correctly', () => {
    const [firstSelection, secondSelection] = firstFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const [firstEmotionalState, secondEmotionalState] = test.getEmotionalState();
    const [
      expectedFirstEmotionalState,
      expectedSecondEmotionalState,
    ] = firstFixture.emotionalStates;

    expect(firstEmotionalState).toEqual(expectedFirstEmotionalState);
    expect(secondEmotionalState).toEqual(expectedSecondEmotionalState);
  });

  it('should return pairs correctly', () => {
    const [firstSelection, secondSelection] = firstFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const pairs = test.getPairs();
    const expectedPairs = firstFixture.pairs;

    expect(pairs).toEqual(expectedPairs);
  });
});

describe('[Two stage] Second fixture', () => {
  it('should return emotional state correctly', () => {
    const [firstSelection, secondSelection] = secondFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const [firstEmotionalState, secondEmotionalState] = test.getEmotionalState();
    const [
      expectedFirstEmotionalState,
      expectedSecondEmotionalState,
    ] = secondFixture.emotionalStates;

    expect(firstEmotionalState).toEqual(expectedFirstEmotionalState);
    expect(secondEmotionalState).toEqual(expectedSecondEmotionalState);
  });

  it('should return pairs correctly', () => {
    const [firstSelection, secondSelection] = secondFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const pairs = test.getPairs();
    const expectedPairs = secondFixture.pairs;

    expect(pairs).toEqual(expectedPairs);
  });
});

describe('[Two stage] Third fixture', () => {
  it('should return emotional state correctly', () => {
    const [firstSelection, secondSelection] = thirdFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const [firstEmotionalState, secondEmotionalState] = test.getEmotionalState();
    const [
      expectedFirstEmotionalState,
      expectedSecondEmotionalState,
    ] = thirdFixture.emotionalStates;

    expect(firstEmotionalState).toEqual(expectedFirstEmotionalState);
    expect(secondEmotionalState).toEqual(expectedSecondEmotionalState);
  });

  it('should return pairs correctly', () => {
    const [firstSelection, secondSelection] = thirdFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const pairs = test.getPairs();
    const expectedPairs = thirdFixture.pairs;

    expect(pairs).toEqual(expectedPairs);
  });
});
