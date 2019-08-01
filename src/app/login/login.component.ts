import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [ApiService]
})
export class LoginComponent {
    isLoggingIn = false;
    processing = false;
    loginStatus = '';
    user = {
        confirmPassword: '',
        email: '',
        password: ''
    }

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
    }

    forgotPassword() {
        console.log('ahihi');

    }

    toggleForm() {
        console.log('toggleForm');

    }

    submit() {
        let body = {
            "request": "login",
            "email": this.user.email,
            "password": this.user.password
        }
        this.processing = true;
        this.apiService.callApi(body).subscribe(data => {
            this.processing = false;

            if (data['message'] == 'success') {
                this.loginStatus = 'Login Success';
            } else {
                this.loginStatus = 'Login Failed';
            }
        })
    }

    focusConfirmPassword() {
        console.log('focusConfirmPassword');
    }

    focusPassword() {
        console.log('focusPassword');
    }
}
