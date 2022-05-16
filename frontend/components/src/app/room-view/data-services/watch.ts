import { Subject } from "rxjs";
import { interval } from 'rxjs';

export class ValueWatcher {
  private value?: any;
  private variableFunction: () => any;

  private prev: any = null;
  private current?: any = null;

  private subject = new Subject<any>();
  private observable = this.subject.asObservable();

  constructor(variableFunction: () => any) {
    this.variableFunction = variableFunction;
    interval()
      .subscribe(() => {
        this.current = this.variableFunction();
        if (this.prev !== this.current) this.subject.next(this.value);

        this.prev = this.current;
      })
  }

  onChangeDetected(handler: (...args: Parameters<typeof this.observable.subscribe>) => void) {
    this.observable.subscribe(handler);
  }
}
