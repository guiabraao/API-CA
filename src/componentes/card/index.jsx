import { useEffect, useState } from 'react'
import styles from '../card/Card.module.css'

function Card(props) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.info}>
                    <h1>{props.datahora}</h1>
                    <h1>{props.estadio}</h1>
                </div>
                <div className={styles.times}>
                    {
                        props.times.map(time => (
                            <div>
                                <img src={time.imagem} alt="" />
                                <h2>{time.nome} - {time.gols}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card