export function ascending(arr: any[], propName: string): any[] {
    return arr.sort((a, b) => parseFloat(a[propName]) - parseFloat(b[propName]));
}

export function descending(arr: any[], propName: string): any[] {
    return arr.sort((a, b) => parseFloat(b[propName]) - parseFloat(a[propName]));
}