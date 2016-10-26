import { Injectable } from '@angular/core';
import { Subject } from 'rxJs/Subject';
import { Observable } from 'rxJs/Observable'

@Injectable()
export class SidenavService {

  private stateRequestSubject = new Subject()

  constructor() { }

  observable(): Observable<string> {
    return this.stateRequestSubject
  }

  open() {
    this.stateRequestSubject.next("open")
  }

  close() {
    this.stateRequestSubject.next("close")
  }

}
