import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public checkCredentials(name, pass){
    // make server side credential verification
    return true;
  }
}
