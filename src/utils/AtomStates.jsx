import { atom } from "recoil";

const loggedInState = atom({
  key: "loggedIn",
  default: false,
});

const userDataState = atom({
  key: "userData",
  default: null,
});

const appSettingsState = atom({
  key: "appSettings",
  default: null,
});

const activeMatkasState = atom({
  key: "activeMatkas",
  default: [],
});

const advertisementsState = atom({
  key: "advertisements",
  default: [],
});

export {
  loggedInState,
  userDataState,
  activeMatkasState,
  appSettingsState,
  advertisementsState,
};
