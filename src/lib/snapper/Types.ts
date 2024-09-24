export interface Snapper {
    fixOffset(newStart: number, newEnd: number) : {start: number, end: number}
}