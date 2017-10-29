import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginForm: FormGroup;
    submitted: boolean; //Variable para uso de prueba!
    
    constructor( private formBuilder: FormBuilder, private http: HttpClient ){
        this.createLoginForm();
    }
    
    createLoginForm(){
        this.loginForm = this.formBuilder.group({
            email: [ '', [ Validators.email, Validators.minLength(8) ] ],
            password: ['', [ Validators.minLength(8), Validators.maxLength(16) ] ]
        });
    }
    
    onSubmit(){
        const url = 'http://www.prueba.com.uy/';
        const httpBody = { 
                            user: this.loginForm.get('email'), 
                            password: this.loginForm.get('password') 
                         };
        
        this.submitted = true;
        
        this.http.post(url, httpBody).subscribe(
            err => {
                console.log('ERROR - Se produjo un error en login!');
            }
        );
    }
}