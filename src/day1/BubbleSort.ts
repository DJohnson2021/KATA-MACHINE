export default function bubble_sort(arr: number[]): void {

    // My logic
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    //Primeagen's logic
    /*
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    */

}