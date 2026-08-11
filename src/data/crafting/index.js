import keyring from "./keyring";
import spiralGear from "./spiralGear";
import corruptedGear from "./corruptedGear";
import materialEx from "./materialEx";

const craftingItems = [
  ...keyring,
  ...spiralGear,
  ...corruptedGear,
  ...materialEx,
];

export default craftingItems;