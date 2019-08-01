import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    callApi(body) {
        return this.http.post("https://app.dev.skilpe.com/backend/api/index.php", body).pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }
    
    protected handleError(error: any) {
        console.log(error);
        return throwError(error);
    }
}
