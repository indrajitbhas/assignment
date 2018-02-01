import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userId: string;
  private password: string;

  constructor(private authServer: LoginService, private router: Router) {
  }

  private checkCredentials(userId, password):void{
    const resolved = this.authServer.checkCredentials(userId, password);
    if(resolved){
      alert(resolved)
      this.router.navigate(['/todo']);

    }
  }

  ngOnInit() {
  }

}
