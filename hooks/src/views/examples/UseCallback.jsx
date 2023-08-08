import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useCallback } from "react";
import UseCallBackbuttons from "./useCallbackNuttons";
import { useState } from "react";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);
  const inc = useCallback(
    function (delta) {
      setCount((current) => current + delta);
    },
    [setCount]
  );
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallBackbuttons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
