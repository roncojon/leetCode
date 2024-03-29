// My solution
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

  // Best solution 
  const maximumWealth2 = (accounts: number[][]): number => {

    let maxWealth:number = 0;

    for(let account of accounts) {
        const sum = account.reduce((runningTotal, nextValue) => runningTotal + nextValue, 0);
        maxWealth = Math.max(maxWealth, sum);
    }

    return maxWealth;

};