export function flippingMatrixByMeEqualsShit(matrix: number[][]): number {
    // Write your code here
    // SUM NUMBER
    let sum = 0;

    // Define the top-left quadrant
    const until = matrix.length / 2;
    // const topLeftQuadrant: number[][] = [];
    // for (let index = 0; index < until; index++) {
    //     const rowTemp: number[] = [];
    //     for (let j = 0; j < until; j++) {
    //         rowTemp.push(matrix[index][j]);
    //         // topLeftQuadrant.push(matrix[index][j]);
    //         //// ACTUALLY HERE I JUST NEEDED TO DEFINE THE until const, THEN I CAN COMPARE IF I GO THROUGH AN ARRAY ////
    //         sum += matrix[index][j];
    //     }
    //     topLeftQuadrant.push(rowTemp);
    // }

    // MAKE FUNCTION TO SUM THE TOP-LEFT QUARTER
    const checkSum = () => {
        for (let index = 0; index < until; index++) {
            // const rowTemp: number[] = [];
            for (let j = 0; j < until; j++) {
                // rowTemp.push(matrix[index][j]);
                // topLeftQuadrant.push(matrix[index][j]);
                //// ACTUALLY HERE I JUST NEEDED TO DEFINE THE until const, THEN I CAN COMPARE IF I GO THROUGH AN ARRAY ////
                sum += matrix[index][j];
            }
            // topLeftQuadrant.push(rowTemp);
        }
    }
    // I GESS THIS WILL BE RECURSIVELY
    // CALCULATE FOREACH ROW IF REVERTING IT WILL IMPROVE THE TOTAL SUM OF THE TOP-LEFT QUADRANT
    // CALCULATE FOREACH COLUMN IF REVERTING IT WILL IMPROVE THE TOTAL SUM OF THE TOP-LEFT QUADRANT

    // Compare actual left of a row with this row but reverted
    const returnTheBestOfaRow = (arr: number[]) => {
        let normalRowSumTemp = 0;
        let revertedRowSumTemp = 0;
        for (let index = 0; index < arr.length; index++) {
            if (index < until)
                normalRowSumTemp += arr[index];
            else
                revertedRowSumTemp += arr[index];
        }
        const resultArray = normalRowSumTemp>revertedRowSumTemp ? arr : [...arr].reverse();
        return resultArray;
    }



    // IF THERE IS NO OPERATION TO DO RETURN SUM.

    //
    console.log(matrix)
    // console.log(topLeftQuadrant)
    console.log(sum)
    return 0;
}

export function flippingMatrixByChatGpt(matrix: number[][]): number {
    const n = matrix.length;
    const halfN = n / 2;
    let result = 0;
  
    // Iterate through the top-left quadrant
    for (let i = 0; i < halfN; i++) {
      for (let j = 0; j < halfN; j++) {
        // Find the maximum element in the four corresponding positions
        const maxVal = Math.max(
          matrix[i][j],
          matrix[i][n - 1 - j],
          matrix[n - 1 - i][j],
          matrix[n - 1 - i][n - 1 - j]
        );
        result += maxVal;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
  ];
  const result = flippingMatrix(matrix);
  console.log(result); // Output: 414