export function superDigit(n: string, k: number): number {
    // Write your code here
    if(n.length===1&&k===1)
    {
        console.log('done',parseInt(n))
        return (parseInt(n));
    }
    else if(n.length!==1){
        let nTemp = 0;
        for(let i=0;i<n.length;i++){
            nTemp+= parseInt(n[i]);
        }
        console.log('recursiveCall!==1',nTemp)
        return superDigit(nTemp.toString(),k);
    }
    else{
        let nTemp = n.repeat(k);
        console.log('recursiveCall===1',nTemp)
        return superDigit(nTemp,1);
    }
}

export const superDigitTestParameters = {n:'123',k:4};