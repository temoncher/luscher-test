import { QuickTestColors } from "@/constants/colors.enum";

export class QuickLuscherTest {
    firstStage: QuickTestColors[];

    setFirstStage(colors: QuickTestColors[]) {
      if (colors.length !== 8) {
        throw new Error('You shold pass an array of 8 colors, no more, no less');
      }

      this.firstStage = [...colors];
    }
}
