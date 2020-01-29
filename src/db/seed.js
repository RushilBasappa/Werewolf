import { db } from "../config";

const characters = {
  werewolf: 2,
  villagers: 3,
  seer: 1,
  robber: 1,
  troublemaker: 1
};

const updateCharacters = () => {
  let payload = {};
  payload["characters"] = characters;
  db.ref("/").update(payload);
};

export { updateCharacters };
