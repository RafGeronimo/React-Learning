import React from "react";
import { useState } from "react";

const initialState = {
  number: 1234,
  text: "Context API + Hooks",
};

export const AppContext = React.createContext(null);

const Store = (props) => {
  const [state, setState] = useState(initialState);
  function updateState(key, newValue) {
    setState({
      ...state,
      [key]: newValue,
    });
  }
  return (
    // Cria o provider seta os atributos e funções individuais para alterar cada um
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (n) => updateState("number", n),
        setText: (t) => updateState("text", t),
      }}
    >
      {/* renderiza os componentes filhos da Store */}
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
