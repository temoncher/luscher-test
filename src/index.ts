// eslint-disable-next-line import/extensions
import 'module-alias/register';
import { QuickLuscherTest } from '@/quick-test/quick-luscher-test';

console.log('Hello world');

const newTest = new QuickLuscherTest();

newTest.setFirstStage([1, 2, 4, 5, 7, 6, 0, 3]);
