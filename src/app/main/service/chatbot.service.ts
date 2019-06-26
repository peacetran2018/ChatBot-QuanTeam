import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {
    

    constructor(private httpClient: HttpClient) { 

        
    }

    getTranslation(msg: string) : Observable<any>{
        const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Access-Control-Allow-Origin", "*")
    .set("Accept", "application/json");
        return this.httpClient.get<any>('text', 
        {headers: headers
        });
    }
}
