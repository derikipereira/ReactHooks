import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    
    if ( n < 0) return -1
    if (n === 0 ) return 1
    return calcFatorial(n-1) * n

}

function isPar(n){
    if(n % 2 === 0) return true
    else return false

}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [Fatorial, setFatorial] =useState(1)
    const [parOrImpar,setParOrImpar] = useState(false)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        setParOrImpar(isPar(number) ? true : false)
    }, [number])

    return (
        <div className="UseEffect">
            
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            
            <SectionTitle title="Exercicio #01"></SectionTitle>
            
            <div className='center'>
                <div>
                    <span className='text '>Fatorial: </span>
                    <span className='text red'>{Fatorial === -1 ? "Não existe." : Fatorial}</span>
                </div>
                <input type="number" className='input'
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02"></SectionTitle>
            <div>
                <span className='text '>Par ou impar: </span>
                <span className='text red'>{parOrImpar ? "Par." : "Impar."}</span>
            </div>
        </div>
    )
}

export default UseEffect
