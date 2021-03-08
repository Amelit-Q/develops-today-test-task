import { reducer, rootReducer, RootState } from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import thunk from "redux-thunk";

// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
