import { TwoStageTest } from '@/two-stage-test';
import { firstFixture } from './fixtures/two-stage-test/first-fixture';
import { secondFixture } from './fixtures/two-stage-test/second-fixture';

describe('Two stage test', () => {
  it('[First fixture] should return emotional state correctly', () => {
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

  it('[Second fixture] should return emotional state correctly', () => {
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
});
