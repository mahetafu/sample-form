import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {
    userAdminForm: FormGroup;
    submitted: boolean;

    constructor( private formBuilder: FormBuilder, private http: HttpClient ){
        this.openUserAdminForm();
    }

    openUserAdminForm(){
        this.userAdminForm = this.formBuilder.group({
            name: [ '', [ Validators.required, Validators.minLength(4) ] ],
            lastname: [ '', [ Validators.required, Validators.minLength(4) ] ],
            birthdate: [ '', [ Validators.minLength(10), Validators.maxLength(10) ] ],
            address: [ '', [ Validators.required, Validators.minLength(10) ] ],
            phonenumber: [ '', [ Validators.required, Validators.minLength(8) ] ],
            email: [ '', [ Validators.email, Validators.minLength(8) ] ],
            password: ['', [ Validators.minLength(8), Validators.maxLength(16) ] ]
        })
    }

    onSubmit(){
        const url = 'http://www.prueba.com.uy/';
        const httpBody = {                              
                            name: this.userAdminForm.get('name'),
                            lastname: this.userAdminForm.get('lastname'),
                            birthdate: this.userAdminForm.get('birthdate'),
                            address: this.userAdminForm.get('address'),
                            phonenumber: this.userAdminForm.get('phonenumber'),
                            email: this.userAdminForm.get('email'),
                            password: this.userAdminForm.get('password')
                         };
        
        this.submitted = true;
        
        this.http.post(url, httpBody).subscribe(
            err => {
                console.log('ERROR - Se produjo un error al registrar usuario!');
            }
        );
    }
}
