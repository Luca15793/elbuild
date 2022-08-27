import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class JokesService{

    public api = environment.endpoint.rootApi;

    constructor(
      private _http: HttpClient,
    ) { }


    async getRandomJoke(): Promise<any> {
        let url = this.api+"/random";
        return this._http.get<any>(url).toPromise();
    }  

    async getJokeFromCategory(category: string): Promise<any> {
      let url = this.api+"/random";
      let params = new HttpParams();
      params = params.append('category', category);
      return this._http.get<any>(url, {params: params}).toPromise();
  }  
}