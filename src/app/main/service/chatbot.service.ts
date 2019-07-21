import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {


    constructor(private httpClient: HttpClient) {


    }
    getBaseUrl(){
        return "https://deploychatbot.herokuapp.com/";
    }

    getTranslation(msg: string): Observable<any> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.httpClient.post<any>(this.getBaseUrl() + 'gettranslation/', '"'+msg+'"',
            {
                responseType:"json",
                headers: headers
            });
    }
}
