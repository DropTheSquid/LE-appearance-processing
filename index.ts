import { Items_ItemEffectLevels, Items_Manufacturer } from './data';
import * as _ from 'lodash';

enum appearanceType {
  Naked = 0,
  Clothes,
  Light,
  Medium,
  Heavy,
}

enum bodyType {
  humanMale,
  humanFemale,
  Krogan,
  Turian,
  Quarian,
}

type AMMVariant = {
  id: number;
  appearanceType: appearanceType;
  meshVariant: number;
  materialVariant: number;
};
const humanMaleVariants: AMMVariant[] = [
  {
    id: 1,
    appearanceType: appearanceType.Naked,
    meshVariant: 0,
    materialVariant: 0,
  },
  {
    id: 2,
    appearanceType: appearanceType.Naked,
    meshVariant: 0,
    materialVariant: 1,
  },
  {
    id: 3,
    appearanceType: appearanceType.Clothes,
    meshVariant: 0,
    materialVariant: 0,
  },
  {
    id: 4,
    appearanceType: appearanceType.Clothes,
    meshVariant: 0,
    materialVariant: 1,
  },
  {
    id: 5,
    appearanceType: appearanceType.Clothes,
    meshVariant: 0,
    materialVariant: 2,
  },
  {
    id: 6,
    appearanceType: appearanceType.Clothes,
    meshVariant: 0,
    materialVariant: 4,
  },
  {
    id: 7,
    appearanceType: appearanceType.Clothes,
    meshVariant: 1,
    materialVariant: 0,
  },
  {
    id: 8,
    appearanceType: appearanceType.Clothes,
    meshVariant: 1,
    materialVariant: 1,
  },
  {
    id: 9,
    appearanceType: appearanceType.Clothes,
    meshVariant: 1,
    materialVariant: 2,
  },
  {
    id: 10,
    appearanceType: appearanceType.Clothes,
    meshVariant: 1,
    materialVariant: 3,
  },
  {
    id: 11,
    appearanceType: appearanceType.Clothes,
    meshVariant: 1,
    materialVariant: 4,
  },
  {
    id: 12,
    appearanceType: appearanceType.Clothes,
    meshVariant: 1,
    materialVariant: 5,
  },
  {
    id: 13,
    appearanceType: appearanceType.Clothes,
    meshVariant: 2,
    materialVariant: 0,
  },
  {
    id: 14,
    appearanceType: appearanceType.Clothes,
    meshVariant: 2,
    materialVariant: 1,
  },
  {
    id: 15,
    appearanceType: appearanceType.Clothes,
    meshVariant: 2,
    materialVariant: 2,
  },
  {
    id: 16,
    appearanceType: appearanceType.Clothes,
    meshVariant: 2,
    materialVariant: 3,
  },
  {
    id: 17,
    appearanceType: appearanceType.Clothes,
    meshVariant: 2,
    materialVariant: 4,
  },
  {
    id: 18,
    appearanceType: appearanceType.Clothes,
    meshVariant: 3,
    materialVariant: 0,
  },
  {
    id: 19,
    appearanceType: appearanceType.Clothes,
    meshVariant: 3,
    materialVariant: 1,
  },
  {
    id: 20,
    appearanceType: appearanceType.Clothes,
    meshVariant: 3,
    materialVariant: 2,
  },
  {
    id: 21,
    appearanceType: appearanceType.Clothes,
    meshVariant: 4,
    materialVariant: 0,
  },
  {
    id: 22,
    appearanceType: appearanceType.Clothes,
    meshVariant: 4,
    materialVariant: 1,
  },
  {
    id: 23,
    appearanceType: appearanceType.Clothes,
    meshVariant: 4,
    materialVariant: 2,
  },
  {
    id: 24,
    appearanceType: appearanceType.Clothes,
    meshVariant: 5,
    materialVariant: 0,
  },
  {
    id: 25,
    appearanceType: appearanceType.Clothes,
    meshVariant: 5,
    materialVariant: 1,
  },
  {
    id: 26,
    appearanceType: appearanceType.Clothes,
    meshVariant: 5,
    materialVariant: 2,
  },
  {
    id: 27,
    appearanceType: appearanceType.Clothes,
    meshVariant: 5,
    materialVariant: 3,
  },
  {
    id: 28,
    appearanceType: appearanceType.Clothes,
    meshVariant: 6,
    materialVariant: 0,
  },
  {
    id: 29,
    appearanceType: appearanceType.Clothes,
    meshVariant: 6,
    materialVariant: 1,
  },
  {
    id: 30,
    appearanceType: appearanceType.Clothes,
    meshVariant: 7,
    materialVariant: 0,
  },
  {
    id: 31,
    appearanceType: appearanceType.Clothes,
    meshVariant: 7,
    materialVariant: 1,
  },
  {
    id: 32,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 0,
  },
  {
    id: 33,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 1,
  },
  {
    id: 34,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 2,
  },
  {
    id: 35,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 3,
  },
  {
    id: 36,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 4,
  },
  {
    id: 37,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 5,
  },
  {
    id: 38,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 6,
  },
  {
    id: 39,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 7,
  },
  {
    id: 40,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 8,
  },
  {
    id: 41,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 9,
  },
  {
    id: 42,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 10,
  },
  {
    id: 43,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 11,
  },
  {
    id: 44,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 12,
  },
  {
    id: 45,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 13,
  },
  {
    id: 46,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 14,
  },
  {
    id: 47,
    appearanceType: appearanceType.Light,
    meshVariant: 0,
    materialVariant: 15,
  },
  {
    id: 48,
    appearanceType: appearanceType.Light,
    meshVariant: 1,
    materialVariant: 0,
  },
  {
    id: 49,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 0,
  },
  {
    id: 50,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 1,
  },
  {
    id: 51,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 2,
  },
  {
    id: 52,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 3,
  },
  {
    id: 53,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 4,
  },
  {
    id: 54,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 5,
  },
  {
    id: 55,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 6,
  },
  {
    id: 56,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 7,
  },
  {
    id: 57,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 8,
  },
  {
    id: 58,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 9,
  },
  {
    id: 59,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 10,
  },
  {
    id: 60,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 11,
  },
  {
    id: 61,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 12,
  },
  {
    id: 62,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 13,
  },
  {
    id: 63,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 14,
  },
  {
    id: 64,
    appearanceType: appearanceType.Medium,
    meshVariant: 0,
    materialVariant: 15,
  },
  {
    id: 65,
    appearanceType: appearanceType.Medium,
    meshVariant: 1,
    materialVariant: 0,
  },
  {
    id: 66,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 0,
  },
  {
    id: 67,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 1,
  },
  {
    id: 68,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 2,
  },
  {
    id: 69,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 3,
  },
  {
    id: 70,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 4,
  },
  {
    id: 71,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 5,
  },
  {
    id: 72,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 6,
  },
  {
    id: 73,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 7,
  },
  {
    id: 74,
    appearanceType: appearanceType.Medium,
    meshVariant: 2,
    materialVariant: 8,
  },
  {
    id: 75,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 0,
  },
  {
    id: 76,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 1,
  },
  {
    id: 77,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 2,
  },
  {
    id: 78,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 3,
  },
  {
    id: 79,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 4,
  },
  {
    id: 80,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 5,
  },
  {
    id: 81,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 6,
  },
  {
    id: 82,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 7,
  },
  {
    id: 83,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 8,
  },
  {
    id: 84,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 9,
  },
  {
    id: 85,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 10,
  },
  {
    id: 86,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 11,
  },
  {
    id: 87,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 12,
  },
  {
    id: 88,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 13,
  },
  {
    id: 89,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 14,
  },
  {
    id: 90,
    appearanceType: appearanceType.Heavy,
    meshVariant: 0,
    materialVariant: 15,
  },
  {
    id: 91,
    appearanceType: appearanceType.Heavy,
    meshVariant: 1,
    materialVariant: 0,
  },
];

const armorTypeDescription = [163187, 163187, 771340, 771342, 771344];
const armorSpeciedDescription = {
  Human: 165650,
  Turian: 165651,
  Quarian: 165652,
  Krogan: 153483,
};

function getArmorType(input: { bodytype: string }): number {
  switch (input.bodytype[input.bodytype.length - 1]) {
    case 'L':
      return armorTypeDescription[appearanceType.Light];
    case 'M':
      return armorTypeDescription[appearanceType.Medium];
    case 'H':
      return armorTypeDescription[appearanceType.Heavy];
    default:
      return 0;
  }
}

function getArmorSpecies(input: { bodytype: string }): number {
  switch (input.bodytype) {
    case 'GP_ArmorAppr_PlayerMaleL':
    case 'GP_ArmorAppr_PlayerMaleM':
    case 'GP_ArmorAppr_PlayerFemaleH':
    case 'GP_ArmorAppr_PlayerFemaleL':
    case 'GP_ArmorAppr_PlayerFemaleM':
    case 'GP_ArmorAppr_PlayerMaleH':
    case 'GP_ArmorAppr_HenchFemaleH':
    case 'GP_ArmorAppr_HenchFemaleL':
    case 'GP_ArmorAppr_HenchFemaleM':
    case 'GP_ArmorAppr_HenchMaleH':
    case 'GP_ArmorAppr_HenchMaleL':
    case 'GP_ArmorAppr_HenchMaleM':
    case 'GP_ArmorAppr_HenchAsariH':
    case 'GP_ArmorAppr_HenchAsariL':
    case 'GP_ArmorAppr_HenchAsariM':
      return armorSpeciedDescription.Human;
    case 'GP_ArmorAppr_HenchKroganM':
    case 'GP_ArmorAppr_HenchKroganH':
      return armorSpeciedDescription.Krogan;
    case 'GP_ArmorAppr_HenchTurianH':
    case 'GP_ArmorAppr_HenchTurianL':
    case 'GP_ArmorAppr_HenchTurianM':
      return armorSpeciedDescription.Turian;
    case 'GP_ArmorAppr_HenchQuarianL':
      return armorSpeciedDescription.Quarian;
    default:
      return 0;
  }
}

type appearanceOverride = {
  manufacturerId: number;
  type: appearanceType;
  label: string;
};

type modelVariant = {
  manufacturerId: number;
  meshVariant: number;
  bodytype: string;
  label: string;
};

type materialVariant = {
  manufacturerId: number;
  matVariant: number;
  bodytype: string;
  label: string;
};

type itemName = {
  srName: number;
  manufacturerId: number;
};

type completeVariant = {
  manufacturerId: number;
  bodytype: string;
  meshVariant: number;
  matVariant: number;
  label: string;
  override?: appearanceType;
  armorName: number;
  manufacturerName: number;
  srArmorType: number;
  srArmorSpecies: number;
};

function allEqual(...values: string[]) {
  if (values.length === 0) {
    return true;
  }
  const starterValue = values[0];
  for (let value of values) {
    if (value !== starterValue) {
      return false;
    }
  }
  return true;
}

const appearanceOverrides: appearanceOverride[] = [];
const meshVariants: modelVariant[] = [];
const armorNames: itemName[] = [];
const manufacturerNames: itemName[] = [];
const materialVariants: materialVariant[] = [];
const completeVariants: completeVariant[] = [];

// split lines
const lines = Items_ItemEffectLevels.split('\n');
for (const line of lines) {
  const [
    Column1,
    Item,
    GameProperty,
    GameEffect,
    Property,
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
    Level9,
    Level10,
    ItemLabel,
    GamePropertyLabel,
    GameEffectLabel,
  ] = line.split(',');
  if (GamePropertyLabel === 'GP_Manf_Armor_AppearanceOverride') {
    if (
      !allEqual(
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        Level6,
        Level7,
        Level8,
        Level9,
        Level10
      )
    ) {
      console.warn('They are not all equal');
    }
    appearanceOverrides.push({
      manufacturerId: parseInt(Item),
      label: ItemLabel,
      type: parseInt(Level1),
    });
  } else if (GameEffectLabel === 'GE_Armor_ModelVariant_O') {
    if (
      !allEqual(
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        Level6,
        Level7,
        Level8,
        Level9,
        Level10
      )
    ) {
      console.warn('They are not all equal');
    }
    meshVariants.push({
      label: ItemLabel,
      bodytype: GamePropertyLabel,
      manufacturerId: parseInt(Item),
      meshVariant: parseInt(Level1),
    });
  } else if (GameEffectLabel === 'GE_Armor_MatID_O') {
    if (
      !allEqual(
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        Level6,
        Level7,
        Level8,
        Level9,
        Level10
      )
    ) {
      console.warn('They are not all equal');
    }
    materialVariants.push({
      label: ItemLabel,
      bodytype: GamePropertyLabel,
      manufacturerId: parseInt(Item),
      matVariant: parseInt(Level1),
    });
  } else if (GameEffectLabel === 'GE_Item_Name') {
    if (
      !allEqual(
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        Level6,
        Level7,
        Level8,
        Level9,
        Level10
      )
    ) {
      console.warn('They are not all equal');
    }
    armorNames.push({
      manufacturerId: parseInt(Item),
      srName: parseInt(Level1),
    });
  }
}

const manufacturers = Items_Manufacturer.split('\n');
for (const line of manufacturers) {
  const [manufacturerId, Label, Name, Description, Icon, csid] =
    line.split(',');
  manufacturerNames.push({
    manufacturerId: parseInt(manufacturerId),
    srName: parseInt(Name),
  });
}

// these are the armor lines that appear using medium or heavy models regardless of the actual level
// console.log(appearanceOverrides);
// // these are all the mesh variants
// console.log(meshVariants);
// // these are the material variants
// console.log(materialVariants);

for (const arm of meshVariants) {
  const mat = materialVariants.find(
    (x) => x.label === arm.label && x.bodytype == arm.bodytype
  );
  const override = appearanceOverrides.find(
    (y) => y.manufacturerId == arm.manufacturerId
  );
  const armorName = armorNames.find(
    (x) => x.manufacturerId == arm.manufacturerId
  ).srName;
  const manufacturerName = manufacturerNames.find(
    (x) => x.manufacturerId == arm.manufacturerId
  ).srName;

  completeVariants.push({
    ...arm,
    matVariant: mat.matVariant,
    override: override?.type,
    armorName,
    manufacturerName,
    srArmorSpecies: getArmorSpecies(arm),
    srArmorType: getArmorType(arm),
  });
}

const grouped = _.groupBy(completeVariants, (x) =>
  x.bodytype.substring(0, x.bodytype.length - 1)
);
for (const groupName in grouped) {
  const group = grouped[groupName];
  // const sorted = _.sortBy(
  //   group,
  //   (x) => x.meshVariant,
  //   (x) => x.matVariant
  // );
  // console.log(groupName);
  if (groupName.startsWith('GP_ArmorAppr_PlayerMale')) {
    const manufacturerGroups = _.groupBy(group, (x) => x.manufacturerName);
    console.log(manufacturerGroups);
    // for (const foo in manufacturerGroups)
    // {
    //   for (const bar of manufacturerGroups[foo])
    //   {
    //     console.log(bar)
    //   }
    // }
    // console.log(``)
  }
  // const groupedAgain = _.groupBy(
  //   group,
  //   (x) => x.meshVariant + ' ' + x.matVariant
  // );
  // console.log(groupedAgain);
}
