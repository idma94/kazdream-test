import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServerService {
  private key: string;

  constructor(private http: HttpClient) {
    this.key = environment.applicationServerKey;
  }

  getPhotos(options: any = {}): Observable<any> {
    options.client_id = this.key;

    return this.http.get('https:/api.unsplash.com/photos', {observe: 'response', params: options})
      .map(res => ({
        total: parseInt(res.headers.get('x-total'), 10), photos: res.body}));
  }

}
