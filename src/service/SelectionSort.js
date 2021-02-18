 /**
 * Sorts an array of arrays by data in a child array column,
 * using selection sort method
  * @param {*} arr 
  * @param {*} ascend if true, sorts from min to max and vice-versa if false
  * @param {*} column index of column in child array to sort on
  */
export function runSelectionSort(arr, ascend, column) {
  console.log("Selection sort is running");

  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  const traverse = (n) => {
    let smallest = n;

    for (let i = n; i < arr.length; i += 1) {
      if (arr[i][column] < arr[smallest][column]) {
        smallest = i;
      }
    }

    if (smallest !== n) {
      const swap = arr[n];
      arr[n] = arr[smallest];
      arr[smallest] = swap;
    }

    if (n < arr.length - 1) {
      traverse(n + 1);
    }
  };

  traverse(0);
  return ascend ? arr : arr.reverse();
}
