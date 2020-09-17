import { MainColor } from '@/types/enums/main-color.enum';
import { InterpretationSection } from '@/types/interpretation-section.interface';

const selection: MainColor[] = [0, 4, 7, 5, 2, 3, 1, 6];

const interpretation: InterpretationSection[] = [
  {
    title: {
      ru: 'Желаемые цели, или поведение, диктуемое желаемыми целями.',
      en: 'Desired objectives, or behavior dictated by desired objectives.',
    },
    interpretation: [
      {
        asterisks: 2,
        ru: 'Желает выйти из неудобного положе­ния и избавиться от существующих тягот, которые угнетают его и делают его жизнь невыносимой. Старается за­щитить себя, воздерживаясь от участия в спорах и конфликтах.',
        en: 'Desires release from an unsatisfactory situation and from existing burdens which are both depressing and intolerable. Seeking a way out, but feels there is no solution. Tries to protect himself against becoming involved in arguments and conflict.',
        percentage: 0.3,
      },
    ],
  },
  {
    title: {
      ru: 'Существующая ситуация, или поведение, подходящее к существующей ситуации.',
      en: 'The existing situation, or behavior appropriate to the existing situation.',
    },
    interpretation: [
      {
        asterisks: 1,
        ru: 'Нуждается и настойчиво требует близких отношений, взаимопонимания, или же, по крайней мере, какого-нибудь способа удов­летворения страстного желания отождес­твить себя с кем-нибудь или чем-нибудь.',
        en: 'Needs, and insists on having, a close and understanding relationship, or at least some method of satisfying a compulsion to feel identified.',
      },
    ],
  },
  {
    title: {
      ru: 'Черты поведения, которые сдерживаются, или поведение, неподходящее к существующей ситуации.',
      en: 'Characteristics under restraint, or behavior inappropriate to the existing situation. ',
    },
    interpretation: [
      {
        asterisks: 1,
        ru: 'Недоволен тем сопротивлением, с кото­рым столкнулся, как только он попытался самоутвердиться. Испытывает гнев и воз­мущение из-за своих поражений, но апатич­но уступает и предпринимает любые шаги, чтобы обеспечить себе мир и покой.',
        en: 'Unhappy at the resistance he feels whenever he tries to assert himself. Indignant and resentful because of these setbacks, but gives way apathetically and makes whatever adjustments are necessary so that he can have peace and quiet. ',
      },
    ],
  },
  {
    title: {
      ru: 'Отвергнутые или подавленные черты поведения, или источники беспокойства.',
      en: 'Rejected or suppressed characteristics, or anxiety-laden characteristics.',
    },
    interpretation: [
      {
        asterisks: 1,
        ru: {
          physio: 'эмо­циональная неудовлетворенность и недо­статочное признание со стороны окружа­ющих привели к стрессу и чрезмерной сдержанности.',
          physcho: 'чув­ствует, что должен заручиться взаимной выручкой прежде, чем существующее пол­ожение улучшится. Нехватка понимания и признания вынуждает его терять веру в благотворные возможности ныне сущес­твующих связей. Неудовлетворенность вызывает в нем болезненную чувствитель­ность. Он хочет ощутить себя в более безопасном и легком положении. Желает избавиться от угнетающих его связей и восстановить утраченную независимость. Его сдержанность в проявлении эмоций, мешает им получить выход и ведет к изоляции. В свою очередь изолирован­ность от людей порождает в его душе желание ослабить свой самоконтроль и слиться с другими людьми. Эти эмоцио­нальные порывы он считает слабостью, которую следует преодолеть. Он прихо­дит к выводу, что может самоутвердиться, лишь продолжая проявлять сдержанность. Он полагает, что только таким путем он сможет выстоять перед лицом нынешних трудностей.',
          inBrief: 'эмоциональная неудовлетворен­ность, вызванная недостатком общес­твенного признания и собственной излиш­ней сдержанностью.',
        },
        en: {
          physio: 'Emotional discontent and lack of appreciation have led to stress and excessive self-restraint',
          physcho: 'Feels he must have co-operation before the existing situation can be improved. Lack of understanding and appreciation makes him feel no real bond exists, and discontent gives rise to a touchy sensitivity; he wants to feel safer and more at ease. He would like to get away from what he now considers a depressing tie and re-establish his own individuality. His sensual self-restraint makes it difficult for him to give himself, but the resulting isolation leads to the urge to surrender and merge with another. This disturbs him as he regards such instincts as weaknesses to be overcome—he feels that he can only assert his own individuality by continued self-restraint, that this alone will allow him to stand his ground through his present difficulties.',
          inBrief: 'Emotional discontent arising from lack of appreciation and undue self-restraint.',
        },
        percentage: 0.6,
      },
    ],
  },
];

export const firstFixture = {
  selection,
  interpretation,
};
