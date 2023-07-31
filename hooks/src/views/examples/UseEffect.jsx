import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { ReactDOM } from 'react-dom';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFactorial (num) {
    const n = parseInt(num);
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    if(n > 0) {
        return calcFactorial(n - 1) * n;
    }
}
const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);


    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number]);

    useEffect ( () => {
        if (factorial > 8000) {
            document.title = "É mais de 8000!"
        }
    }, [factorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? "Não existe" : factorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <span className="text">{number}</span>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">Aguarde</span>
            </div>
        </div>
    )
}
export default UseEffect
