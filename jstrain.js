let numbers = [0, 1];
for (let i = 0; i < 7; i++) {
    const newNumber = numbers[length - 1] + numbers[length - 2];
    newNumber.push(numbers);
    if (i === 7) {
        console.log(numbers);
    }
}