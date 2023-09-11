export default function bs_list(haystack: number[], needle: number): boolean {
    // low is inclusive, high is exclusive, [low, high)
    // I personally like making the high inclusive before starting the loop but this way
    // I avoid off by 1 errors.
    let low = 0;
    let high = haystack.length;

    do {
        const m = Math.floor(low + (high - low) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            high = m;
        } else {
            low = m + 1;
        }

    } while (low < high);
    
    return false;
} 