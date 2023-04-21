import React, { useReducer } from "react";
import reducer from "./store/store";
import { StateContext } from "./store/stateContext";
import { Header } from "./header";
import { Calendar } from "./main";
import { AppWrapper } from "./style/styled";



function App() {
  const initialState = { weekArr: [], taskArr: [], today: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(initialState)
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AppWrapper className="App">
        <Header />
        <Calendar />
      </AppWrapper>
    </StateContext.Provider>
  );
}

export default App;
