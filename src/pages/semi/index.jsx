/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './Semi.module.css'
import Card from '../../componentes/card'

function Semi({ fase }) {

    const [ jogos, setJogos ] = useState([])
    const url = `https://raw.githubusercontent.com/gabrieldumoont/api-copaamerica/main/tabela-semi.json`

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
            <h1>SEMI FINAL</h1>
            {   
                jogos.map(jogo => (
                    <Card datahora={jogo.datahora} estadio={jogo.estadio} times={jogo.times} />
                ))
            }
        </main>
        </>
    )
}

export default Semi


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultDiv = document.getElementById('result');
  
    let exchangeRates = {};
  
    // Função para carregar o arquivo JSON e popular os menus
    const loadExchangeRates = async () => {
      try {
        const response = await fetch('exchange-rates.json'); // O arquivo JSON deve estar no mesmo diretório
        exchangeRates = await response.json();
  
        populateCurrencySelect(fromCurrencySelect);
        populateCurrencySelect(toCurrencySelect);
      } catch (error) {
        console.error('Erro ao carregar taxas de câmbio:', error);
      }
    };
  
    // Função para popular os menus de seleção com as moedas
    const populateCurrencySelect = (selectElement) => {
      Object.keys(exchangeRates).forEach(currencyCode => {
        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = `${currencyCode} (${exchangeRates[currencyCode].name})`;
        selectElement.appendChild(option);
      });
    };
  
    // Função para converter o valor
    const convert = () => {
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
      const amount = parseFloat(document.getElementById('amount').value);
  
      if (!fromCurrency || !toCurrency || isNaN(amount)) {
        resultDiv.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
      }
  
      const fromRate = exchangeRates[fromCurrency].rate;
      const toRate = exchangeRates[toCurrency].rate;
  
      const convertedAmount = (amount / fromRate) * toRate;
      resultDiv.textContent = `${amount} ${fromCurrency} (${exchangeRates[fromCurrency].name}) é equivalente a ${convertedAmount.toFixed(2)} ${toCurrency} (${exchangeRates[toCurrency].name})`;
    };
  
    loadExchangeRates();
  });
  