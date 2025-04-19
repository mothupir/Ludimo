import { Injectable, OnInit } from '@angular/core';
import { Wallet, CoinType, initLogger, WalletOptions, Utils } from '@iota/sdk';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  signUp() {
    const options: WalletOptions = {
      storagePath: ''
    }
  }
}
