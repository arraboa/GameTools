const defaultGraphType = "graph LR;";
const defaultLeftWrapper = "(";
const defaultRightWrapper = ")";
const defaultArrowLink = "-->";
const defaultLineLink = "---";

export const physicalClassTreeDescription = {
  graphType: defaultGraphType,
  leftWrapper: defaultLeftWrapper,
  rightWrapper: defaultRightWrapper,
  arrowLink: defaultArrowLink,
  lineLink: defaultLineLink,
  links: [
    // ranger
    ["ranger", "thief"],
    ["ranger", "myrmidon"],
    ["ranger", "mercenary"],

    ["thief", "assassin"],

    ["myrmidon", "swordmaster"],
    ["myrmidon", "trooper"],

    ["mercenary", "hero"],
    ["mercenary", "warrior"],

    // journeyman
    ["journeyman", "fighter"],
    ["journeyman", "brigand"],
    ["journeyman", "pirate"],

    ["fighter", "warrior"],
    ["fighter", "berserker"],

    ["brigand", "berserker"],

    ["pirate", "berserker"],
    ["pirate", "raider"],

    // squire
    ["squire", "lancer"],
    ["squire", "cavalier"],

    ["lancer", "sentinel"],
    ["lancer", "fortress"],

    ["cavalier", "paladin"],
    ["cavalier", "pegasusKnight"],

    // scout
    ["scout", "archer"],
    ["scout", "nomad"],

    ["archer", "sniper"],
    ["archer", "hunter"],

    ["nomad", "trooper"]
  ]
};

export const magicalClassTreeDescription = {
  graphType: defaultGraphType,
  leftWrapper: defaultLeftWrapper,
  rightWrapper: defaultRightWrapper,
  arrowLink: defaultArrowLink,
  lineLink: defaultLineLink,
  links: [
    // scholar
    ["scholar", "priest"],
    ["scholar", "sorcerer"],
    ["priest", "saint"],
    ["sorcerer", "druid"],

    // mage
    ["mage", "elementalistFire"],
    ["mage", "elementalistWind"],
    ["mage", "elementalistThunder"]
  ]
};

export const relationshipsTreeDescription = {
  graphType: defaultGraphType,
  leftWrapper: defaultLeftWrapper,
  rightWrapper: defaultRightWrapper,
  arrowLink: defaultArrowLink,
  lineLink: defaultLineLink,
  links: [
    ["Lili", "Guilhem", ""],
    ["Basil", "Lili"],
    ["Eugenie", "Lili"],

    ["Gregor", "Rose"],
    ["Matilda", "Rose"],
    ["Lefric", "Gregor"],
    ["Lefric", "Basil"]
  ]
};
