import { useEffect, useState } from 'react'
import styles from './Grupos.module.css'

function FaseGrupos() {

    const [ grupos, setGrupos ] = useState([])
    const [ letraSelecionada, setLetraSelecionada ] = useState('A')

    useEffect(() => {
        const buscarGrupos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/gabrieldumoont/api-copaamerica/main/tabela-grupos.json')
            const data = await response.json()
            setGrupos(data)
        }
        buscarGrupos()
    }, [])


    return (
        <>
            <main>
                <select
                    value={letraSelecionada}
                    onChange={(e) => setLetraSelecionada(e.target.value)}>
                    <option value="A">Grupo A</option>
                    <option value="B">Grupo B</option>
                    <option value="C">Grupo C</option>
                    <option value="D">Grupo D</option>
                </select>

                <div className={styles.table}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Posição</th>
                                <th>Seleção</th>
                                <th>Pontos</th>
                                <th>Vitórias</th>
                                <th>Empates</th>
                                <th>Derrotas</th>
                                <th>Saldo de Gols</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                grupos.filter( grupo => grupo.grupo === letraSelecionada).map( grupo => (
                                grupo.times.map(time => (
                                        <tr key={time.posicao}>
                                            <td><img src={time.imagem}/></td>
                                            <td>#{time.posicao}</td>
                                            <td>{time.nome}</td>
                                            <td>{time.pontos}</td>
                                            <td>{time.vitorias}</td>
                                            <td>{time.empates}</td>
                                            <td>{time.derrotas}</td>
                                            <td>{time.saldogol}</td>
                                        </tr>
                                ))
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default FaseGrupos