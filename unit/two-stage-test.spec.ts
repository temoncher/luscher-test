import { TwoStageTest } from '@/two-stage-test';
import { firstFixture } from './fixtures/two-stage-test/first-fixture';
import { secondFixture } from './fixtures/two-stage-test/second-fixture';
import { thirdFixture } from './fixtures/two-stage-test/third-fixture';

describe('[Two stage] First fixture', () => {
  it('should return emotional state correctly', () => {
    const [firstSelection, secondSelection] = firstFixture.selections;

    const { emotionalState } = new TwoStageTest(firstSelection, secondSelection);
    const [firstEmotionalState, secondEmotionalState] = emotionalState;
    const [
      expectedFirstEmotionalState,
      expectedSecondEmotionalState,
    ] = firstFixture.emotionalStates;

    expect(firstEmotionalState).toEqual(expectedFirstEmotionalState);
    expect(secondEmotionalState).toEqual(expectedSecondEmotionalState);
  });

  it('should return pairs correctly', () => {
    const [firstSelection, secondSelection] = firstFixture.selections;

    const { pairs } = new TwoStageTest(firstSelection, secondSelection);
    const expectedPairs = firstFixture.pairs;

    expect(pairs).toEqual(expectedPairs);
  });

  it('should return groups correctly', () => {
    const [firstSelection, secondSelection] = firstFixture.selections;

    const { groups } = new TwoStageTest(firstSelection, secondSelection);
    const expectedGroups = firstFixture.groups;

    expect(groups).toEqual(expectedGroups);
  });

  it('should return result correctly', () => {
    const [firstSelection, secondSelection] = firstFixture.selections;

    const test = new TwoStageTest(firstSelection, secondSelection);
    const result = test.getResult();
    const expectedResult = firstFixture.result;

    expect(expectedResult).toEqual(expectedResult);
  });
});

describe('[Two stage] Second fixture', () => {
  it('should return emotional state correctly', () => {
    const [firstSelection, secondSelection] = secondFixture.selections;

    const { emotionalState } = new TwoStageTest(firstSelection, secondSelection);
    const [firstEmotionalState, secondEmotionalState] = emotionalState;
    const [
      expectedFirstEmotionalState,
      expectedSecondEmotionalState,
    ] = secondFixture.emotionalStates;

    expect(firstEmotionalState).toEqual(expectedFirstEmotionalState);
    expect(secondEmotionalState).toEqual(expectedSecondEmotionalState);
  });

  it('should return pairs correctly', () => {
    const [firstSelection, secondSelection] = secondFixture.selections;

    const { pairs } = new TwoStageTest(firstSelection, secondSelection);
    const expectedPairs = secondFixture.pairs;

    expect(pairs).toEqual(expectedPairs);
  });

  it('should return groups correctly', () => {
    const [firstSelection, secondSelection] = secondFixture.selections;

    const { groups } = new TwoStageTest(firstSelection, secondSelection);
    const expectedGroups = secondFixture.groups;

    expect(groups).toEqual(expectedGroups);
  });
});

describe('[Two stage] Third fixture', () => {
  it('should return emotional state correctly', () => {
    const [firstSelection, secondSelection] = thirdFixture.selections;

    const { emotionalState } = new TwoStageTest(firstSelection, secondSelection);
    const [firstEmotionalState, secondEmotionalState] = emotionalState;
    const [
      expectedFirstEmotionalState,
      expectedSecondEmotionalState,
    ] = thirdFixture.emotionalStates;

    expect(firstEmotionalState).toEqual(expectedFirstEmotionalState);
    expect(secondEmotionalState).toEqual(expectedSecondEmotionalState);
  });

  it('should return pairs correctly', () => {
    const [firstSelection, secondSelection] = thirdFixture.selections;

    const { pairs } = new TwoStageTest(firstSelection, secondSelection);
    const expectedPairs = thirdFixture.pairs;

    expect(pairs).toEqual(expectedPairs);
  });

  it('should return groups correctly', () => {
    const [firstSelection, secondSelection] = thirdFixture.selections;

    const { groups } = new TwoStageTest(firstSelection, secondSelection);
    const expectedGroups = thirdFixture.groups;

    expect(groups).toEqual(expectedGroups);
  });
});
