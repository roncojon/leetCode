export function findMedian(arr: number[]): number {
    // Write your code here
     const sortedArr = arr.sort((a, b) => a - b);
     console.log('sortedArr',sortedArr)
     console.log('inside',sortedArr[(arr.length-1)/2])
    return arr.sort((a, b) => a - b)[(arr.length-1)/2]
   }

   export const findMedianTestParams = [1,2,3];