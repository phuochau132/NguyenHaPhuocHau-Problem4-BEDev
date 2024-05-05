# Problem4

## Description
This project contains TypeScript code to calculate the sum of integers up to a given number using different approaches. It includes three functions:

1. `sum_to_n_a`: Recursively calculates the sum up to the given number `n`.
2. `sum_to_n_b`: Uses a loop to iteratively calculate the sum up to the given number `n`.
3. `sum_to_n_c`: Utilizes a mathematical formula to directly calculate the sum up to the given number `n`.

Each function is tested with a constant `MAX_SAFE_INTEGER` set to 5, and the results are printed to the console.

## Complexity Analysis
- `sum_to_n_a`: Time complexity is O(n) due to recursive calls.
- `sum_to_n_b`: Time complexity is O(n) due to the loop iterating over `n` elements.
- `sum_to_n_c`: Time complexity is O(1) because it computes the sum using a formula.

## Usage
To run the project, make sure you have Node.js and TypeScript installed. Then, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm start`.

## Scripts
- `start`: Compiles TypeScript code and starts the application using nodemon.
- `test`: Placeholder script for running tests.

## Author
Riven(Nguyen Ha Phuoc Hau)
