import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import appReducer from "./slices/app";
import conversationReducer from "./slices/conversation";
import authReducer from "./slices/auth";
import audioCallReducer from "./slices/audioCall";
import videoCallReducer from "./slices/videoCall";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  conversation: conversationReducer,
  auth: authReducer,
  audioCall: audioCallReducer,
  videoCall: videoCallReducer,
});

export { rootPersistConfig, rootReducer };
