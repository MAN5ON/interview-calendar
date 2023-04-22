import React, { useReducer } from "react";
import { reducer, initialState, StateContext } from "./store";
import { Header } from "./header";
import { Calendar } from "./main";
import { AppWrapper } from "./style/styled";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
