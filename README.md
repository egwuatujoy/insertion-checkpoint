# insertion-checkpoint


# Insertion Sort Algorithm

This repository contains a JavaScript implementation of the Insertion Sort algorithm. The `insertSort` function sorts an array of numbers in ascending order using the Insertion Sort algorithm.

## Insertion Sort Algorithm

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.

- It is simple to implement.
- It is efficient for small data sets or lists that are mostly sorted.

## Usage

To use the `insertSort` function, simply pass an array of numbers to it, and it will return a new array with the elements sorted in ascending order.

```javascript
const unsortedArray = [4, 2, 7, 1, 9, 5];
const sortedArray = insertSort(unsortedArray);

console.log(sortedArray);
