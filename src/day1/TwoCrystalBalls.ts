export default function two_crystal_balls(breaks: boolean[]): number {
    /*
    Given two crystal balls that will break if dropped from high enough distance, 
    determine the exact spot in which it will break in the most optimized way.

    Since there are two balls, we can use first ball to find an approximate breaking point by jumping
    by a certain amount in each loop(sqrt(n) in our case). We will do linear search in that interval 
    to find the correct breaking position.
    */


    // here we will implement a solution that will jump (sprt(n)) times until it reaches true.
    // the time complexity will be O(sqrt(n))
    // If we used regually binary search, after finding the where the first ball breaks, 
    // we would still be left to find where the last ball broke. Thus forcing us to walk back to
    // a previous know position and conduct a linear search, which would be O(n).
    // Thus, if we use the sqrt(n) as the jump distance, we would only have to walk back sqrt(n)
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    
    return -1;
    
    
    
    
    
    /*
    My horrible attempt
    const broken = true;
    let level = 0;
    let low = 0;
    let high = breaks.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);

        if (breaks[mid] === broken) {
            if (breaks[mid - 1] != broken) {
                level = mid + 1;
            } else {
                high = mid;
            }
        } else {
            low = mid + 1;
        }

    } while (low < high);

    return level;
    */
}