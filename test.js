function bubbleSort(data) {
    let change = 1;
    let steps = [];
    for (let i = 0; i < data.length - 1 && change !== 0; i++) {
        change = 0;
        for (let j = 0; j < data.length - 1 - i; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j + 1];
                data[j + 1] = data[j];
                data[j] = temp;
                steps.push([...data]);
                change = 1
            }
        }
    }
    return steps
}
console.log(bubbleSort(["abcdef",'abcd']));