import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class CategoriesService{

    public api = environment.endpoint.rootApi;

    constructor(
        private _http: HttpClient,
    ) { }


    async getCategories(): Promise<any> {
        let url = this.api+"/categories";
        return this._http.get<any>(url).toPromise();
    }  

}