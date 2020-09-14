import { TwoStageTest } from '@/two-stage-test';
import { firstFixture } from './fixtures/two-stage-test/first-fixture';
import { fourthFixture } from './fixtures/two-stage-test/fourth-fixture';
import { secondFixture } from './fixtures/two-stage-test/second-fixture';
import { thirdFixture } from './fixtures/two-stage-test/third-fixture';

describe('[Two stage] First fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...firstFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toStrictEqual(firstFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toStrictEqual(firstFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toStrictEqual(firstFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toStrictEqual(firstFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toStrictEqual(firstFixture.signs);
  });

  it('should return sign maps correctly', () => {
    expect(test.signMaps).toStrictEqual(firstFixture.signMaps);
  });

  it('should return interpretation pairs correctly', () => {
    expect(test.interpretationPairs).toStrictEqual(firstFixture.interpretationPairs);
  });
});

describe('[Two stage] Second fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...secondFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toStrictEqual(secondFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toStrictEqual(secondFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toStrictEqual(secondFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toStrictEqual(secondFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toStrictEqual(secondFixture.signs);
  });

  it('should return sign maps correctly', () => {
    expect(test.signMaps).toStrictEqual(secondFixture.signMaps);
  });

  it('should return interpretation pairs correctly', () => {
    expect(test.interpretationPairs).toStrictEqual(secondFixture.interpretationPairs);
  });
});

describe('[Two stage] Third fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...thirdFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toStrictEqual(thirdFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toStrictEqual(thirdFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toStrictEqual(thirdFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toStrictEqual(thirdFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toStrictEqual(thirdFixture.signs);
  });

  it('should return sign maps correctly', () => {
    expect(test.signMaps).toStrictEqual(thirdFixture.signMaps);
  });

  it('should return interpretation pairs correctly', () => {
    expect(test.interpretationPairs).toStrictEqual(thirdFixture.interpretationPairs);
  });
});

describe('[Two stage] Fourth fixture', () => {
  let test: TwoStageTest;

  beforeEach(() => {
    test = new TwoStageTest(...fourthFixture.selections);
  });

  it('should return anxiety levels correctly', () => {
    expect(test.anxietyLevels).toStrictEqual(fourthFixture.anxietyLevels);
  });

  it('should return emotional state correctly', () => {
    expect(test.emotionalStates).toStrictEqual(fourthFixture.emotionalStates);
  });

  it('should return pairs correctly', () => {
    expect(test.pairs).toStrictEqual(fourthFixture.pairs);
  });

  it('should return groups correctly', () => {
    expect(test.groups).toStrictEqual(fourthFixture.groups);
  });

  it('should return signs correctly', () => {
    expect(test.signs).toStrictEqual(fourthFixture.signs);
  });

  it('should return sign maps correctly', () => {
    expect(test.signMaps).toStrictEqual(fourthFixture.signMaps);
  });

  it('should return interpretation pairs correctly', () => {
    expect(test.interpretationPairs).toStrictEqual(fourthFixture.interpretationPairs);
  });
});
