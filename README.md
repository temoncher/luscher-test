# Lüscher Color Test
JS implementation of [Luscher psychological test](https://en.wikipedia.org/wiki/L%C3%BCscher_color_test).

## Installation 
```js
npm install luscher-test
// or
yarn add luscher-test
```
## Exported Constants

#### Main Color
Identificators of main test colors. 
```js 
export enum MainColor {
    BLUE = 1,
    GREEN = 2,
    RED = 3,
    YELLOW = 4,
    PURPLE = 5,
    BROWN = 6,
    BLACK = 7,
    GRAY = 0,
}
```

#### Color HEX
HEX codes for test colors from the library.
```js
export enum ColorHex {
  BLUE = '#004983',
  GREEN = '#1D9772',
  RED = '#F12F23',
  YELLOW = '#F2DD00',
  PURPLE = '#D42481',
  BROWN = '#C55223',
  BLACK = '#231F20',
  GRAY = '#98938D',
}
```

## Usage
Luscher test have three variants: single stage test, two stage test ang full color test.

### Single Stage Test
Сonsists of one sequential selection of colors and makes an interpretation on it.
```js
import { SingleStageTest } from 'luscher-test'

// color codes in order of their selection
const selection = [3, 5, 6, 7, 1, 0, 2, 4];

const test = new SingleStageTest(selection); 

// single stage test interpretation 
const testInterpretation = test.interpret(); 
```

### Two Stage Test
Consists of two sequential selections of colors between which it is recommended to wait a couple of minutes.
The interpretation is based on both choices.
```js
import { TwoStageTest } from 'luscher-test'

// color codes in order of their selection
const firstSelection = [2, 6, 3, 1, 0, 5, 7, 4];
const secondSelection = [5, 7, 3, 1, 0, 4, 2, 6];

const test = new TwoStageTest(firstSelection, secondSelection);

// two stage test interpretation 
// getInterpretation() returns Promise with test interpretation
async function someAsyncFunction() {
  const testInterpretation = await test.getInterpretation() 
  // ...
}
```
#### Specific Data
```js
// Obtained color selections
const selections: [MainColor[], MainColor[]] = test.selections; 
// Color pairs that occur in both selections
const pairs: [MainColor, MainColor][] = test.pairs; 
// Luscher groups in each selection 
const groups: [MainColor, MainColor?][][] = test.groups; 
// State of disturbance and compensation by color for each selection
const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = test.emotionalStates; 
// State of anxiety level by color for each selection
const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = test.anxietyLevels; 
// Total anxiety level for each selection
const totalAnxietyLevel: [number, number] = test.totalAnxietyLevel; 
// Interpretation for total anxiety level of second selection
const anxietyLevelInterpretation: Translations<string> = test.anxietyLevelInterpretation; 
// Signs for each color
const signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = test.signs; 
// Colors for each sign
const signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>] = test.signMaps; 
// Final color pairs used to get interpretation by sign for each selection
const interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>] = test.interpretationPairs; 
```

### Full Color Test
Will be implemented in upcoming releases.

