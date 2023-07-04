import { Subject } from 'rxjs';

export const execute = (): void => {
  const subject = new Subject<number>();
  subject.subscribe((val: number) => console.log(val));
  subject.next(10);
  subject.next(20);
};
