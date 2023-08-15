import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../../store";
import { numberAdd2, login } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => login(dispatch, "Lebron James")}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addN", payload: +5 })}
          >
            +5
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addN", payload: -5 })}
          >
            -5
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "multSeven" })}
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "divideTwentyfive" })}
          >
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "int" })}>
            int
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
