import { TwoStageTest } from '@/two-stage-test';
import { firstFixture } from './fixtures/two-stage-test/first-fixture';
import { secondFixture } from './fixtures/two-stage-test/second-fixture';
import { thirdFixture } from './fixtures/two-stage-test/third-fixture';

describe('[Two stage] First fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...firstFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toEqual(firstFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toEqual(firstFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toEqual(firstFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toEqual(firstFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toEqual(firstFixture.signs);
  });
});

describe('[Two stage] Second fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...secondFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toEqual(secondFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toEqual(secondFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toEqual(secondFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toEqual(secondFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toEqual(secondFixture.signs);
  });
});

describe('[Two stage] Third fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...thirdFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toEqual(thirdFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toEqual(thirdFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toEqual(thirdFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toEqual(thirdFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toEqual(thirdFixture.signs);
  });
});
