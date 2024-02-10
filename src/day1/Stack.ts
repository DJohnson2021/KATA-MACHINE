type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private top?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;


        if (!this.top) {
            this.top = node;
        }

        node.next = this.top;
        this.top = node;
    }
    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;
        const out = this.top;
        this.top = this.top?.next;
        return out?.value;

    }
    peek(): T | undefined {
        return this.top?.value;
    }
}