import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { personExample } from './mix/oop/UsingPersonClass'
import { superDigit, superDigitTestParameters } from './mix/hackerRank/recursiveDigitSum'
import { findMedian, findMedianTestParams } from './mix/hackerRank/findMedian'
import { caesarCipher, caesarCipherTestParams } from './mix/hackerRank/caesarCipher'
import { flippingMatrixByChatGpt } from './mix/hackerRank/flippingTheMatrix'
import CssModulesButton from './components/CssModulesButton/CssModulesButton'

export function App() {
  const [count, setCount] = useState(0)

  /*   // personExample()
    // console.log(superDigit(superDigitTestParameters.n,superDigitTestParameters.k));
    // console.log('median',findMedian([21,63,4,5,2]));
    // let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // let mAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // console.log(alphabet.includes('Z'))
    // console.log(caesarCipher(caesarCipherTestParams.s,caesarCipherTestParams.k))
  
    // flippingMatrixByChatGpt([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
  
    // let arr = ['a','b','c','d','e','f','g','h','i','j']; */

  const accountsParameter = [[1,2,3],[3,2,1]];

  function maximumWealth(accounts: number[][]): number {
    let maximun = 0;
    for (let i = 0; i < accounts.length; i++) {
      let wealth = 0;
      for (let j = 0; j < accounts[i].length; j++) {
        wealth+=accounts[i][j];
      }
      if(wealth>maximun)
      maximun=wealth;
    }
    return maximun;
  };
  
  console.log('maximumWealth', maximumWealth(accountsParameter));

  return (
    <>
      <div>
        <CssModulesButton />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <div className="bg-[red] w-[300px] h-[300px] "></div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-lgxx">
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
