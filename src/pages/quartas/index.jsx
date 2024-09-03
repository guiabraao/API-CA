/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './Quartas.module.css'
import Card from '../../componentes/card'

function Quartas({ fase }) {

    const [ jogos, setJogos ] = useState([])
    const url = `https://raw.githubusercontent.com/gabrieldumoont/api-copaamerica/main/tabela-quartas.json`

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setJogos(data)
        }
        buscarJogos()
    }, [url])

    return (
        <>
        <main>
            <h1>QUARTAS DE FINAL</h1>
            {   
                jogos.map(jogo => (
                    <Card datahora={jogo.datahora} estadio={jogo.estadio} times={jogo.times} />
                ))
            }
        </main>
        </>
    )
}

export default Quartas