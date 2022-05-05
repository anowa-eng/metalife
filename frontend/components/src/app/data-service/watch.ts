import { Observable, Subject } from "rxjs";

export function watch(varName: string) {
    return new Observable((subscriber) => {
        let prev: any, current: any;
        setInterval(() => {
            current = window[varName];
    
            if (current == prev) subscriber.next(current);
        })
    })
}