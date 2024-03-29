const numsParameter = [1, 2, 3];

// My solution
function runningSum(nums: number[]): number[] {
    const hashMap: Map<number, number> = new Map;

    for (let index = 0; index < nums.length; index++) {
        const mapKey = index;
        const mapValue = nums[index];
        if (index === 0)
            hashMap.set(mapKey, mapValue);
        else {
            const accumulated = hashMap.get(index - 1)!;
            hashMap.set(mapKey, mapValue + accumulated);
        }
    }
    return [...hashMap.values()];
};

// Best solution
function runningSum2(nums: number[]): number[] {
    let result: number = 0;
    return nums.map(item => result += item);
};