import { Machine, interpret } from "xstate";

const nightactionStates = {
  initial: "werewolf",
  states: {
    werewolf: {},
    minion: {},
    seer: {},
    robber: {},
    troublemaker: {}
  },
  on: {
    WEREWOLF: ".werewolf",
    MINION: ".minion",
    SEER: ".seer",
    ROBBER: ".robber",
    TROUBLEMAKER: ".troublemaker",
    ENDACTION: "day"
  }
};

const stateMachine = Machine({
  id: "werewolf",
  initial: "new",
  states: {
    selectCharacters: {
      on: {
        RESOLVE: "new"
      }
    },
    new: {
      on: {
        NIGHTACTION: "nightaction",
        SELECTCHARS: "selectCharacters"
      }
    },

    nightaction: {
      ...nightactionStates
    },
    day: {
      on: {
        TIMER: "endgame"
      }
    },
    endgame: {
      type: "final"
    }
  }
});

const stateService = interpret(stateMachine).onTransition(current =>
  console.log("TCL: current", current)
);

export { stateMachine, stateService };
