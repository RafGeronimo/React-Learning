import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function merge (string1, string2) {
     let stringMerge = "";
     for (let i = 0 ; i < (string1 + string2).length ; i++) {
    // if dentro do for, se for par adiciona string1 se ímpar adiciona string 2
         stringMerge += (string1[i] || "") + (string2[i - 1] || "")
     }
    return stringMerge;
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect (() => {
        count.current++; // nao causa uma nova renderização (não haverá looping infinito de renderização!)
        myInput2.current.focus();
    }, [value1])
    useEffect (() => {
        count.current++; // nao causa uma nova renderização (não haverá looping infinito de renderização!)
        myInput1.current.focus();
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1} ref={myInput1} onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                    <input type="text" className="input" value={value2} ref={myInput2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
