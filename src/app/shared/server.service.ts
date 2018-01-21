import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

interface Photos {
  color: string;
  collections: string[];
}

@Injectable()
export class ServerService {
  private key: string;

  constructor(private http: HttpClient) {
    this.key = environment.applicationServerKey;
  }

  getPhotos() {
    const params = new HttpParams()
      .set('client_id', this.key)
      .set('per_page', '12');

    return this.http.get<Photos[]>('https:/api.unsplash.com/photos', {observe: 'response', params});
  }

}
