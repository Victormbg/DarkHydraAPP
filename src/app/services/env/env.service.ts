import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://sleepy-river-60466.herokuapp.com/user/l';

  constructor() { }
}
