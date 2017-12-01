import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Account } from './../account';
import { AccountService } from './../account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ButtonComponent } from './../../amexio/button/button.component';

@Component({
  selector: 'sdsdsd',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountsComponent implements OnInit {

  AccountData : Account[];

  constructor(private accountService: AccountService,private http: HttpClient) { 
    
  }

  ngOnInit() {
    // let a01 : Account = new Account();
    // a01.id = "111";
    // a01.account = "account01";
    // a01.password = "password01";
    // a01.reg_datetime = "2017/11/10";
    

    // let a02 : Account = new Account();
    // a02.id = "222";
    // a02.account = "account02";
    // a02.password = "password02";
    // a02.reg_datetime = "2017/11/11";

    // this.AccountData = [
    //   a01,
    //   a02
    // ];

    this.accountService.getAccounts().subscribe(accounts => this.AccountData = accounts);
    //this.accountService.getAccounts();
    // this.http.get('http://localhost:8081/accounts',{
    //   headers: new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:8081'),
    // }).toPromise().then(
    //  data => this.AccountData = data as Account[]
    // ).catch(
    //   data => console.log(data)
    // );
  }

}
