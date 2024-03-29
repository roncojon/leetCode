export function caesarCipher(s: string, k: number): string {
    // Write your code here
    // Alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let mAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const transformChar = (str:string):string=>{
        let result = '';
        const exist = alphabet.includes(str);
        const existInM = mAlphabet.includes(str);
        const alphabetTemp:string|null = exist ? alphabet : (existInM ? mAlphabet : null);
        
        if(alphabetTemp){
        let index = alphabetTemp.indexOf(str);
        if((index+k)<alphabetTemp.length)
         result = alphabetTemp[index+k]
         else{
         result = alphabetTemp[(index+k)-(alphabetTemp.length)]
         }
         }
         else{
             return str;
         };
         return result;
    }
    let finalResult = '';
    for(let i=0;i<s.length;i++)
    {
        finalResult+=transformChar(s[i]);
    }
    console.log('original string',s);
    console.log('k',k);
    console.log('finalResult',finalResult);
    return finalResult;
}

export const caesarCipherTestParams = {s:'abcz',k:2}