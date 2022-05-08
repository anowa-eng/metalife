import { Subject } from "rxjs";
import { interval as rxjsInterval } from 'rxjs';

export class ValueWatcher {
  private value?: any;
  private variableString: string;

  private prev: any;
  private current: any;

  subject = new Subject<any>();
  observable = this.subject.asObservable();

  constructor(variableString: any) {
    this.variableString = variableString;
    rxjsInterval()
      .subscribe(() => {
        this.value = eval(this.variableString);

        this.current = this.value;
        if (this.prev !== this.current) this.subject.next(this.value);
      })
  }
}
