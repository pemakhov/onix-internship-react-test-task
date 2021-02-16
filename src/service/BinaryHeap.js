const heapify = (arr, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    const swap = arr[largest];
    arr[largest] = arr[i];
    arr[i] = swap;

    heapify(arr, n, largest)
  }
}

export function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i, 0);
  }
}
