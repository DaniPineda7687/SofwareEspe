import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

import { ApodResponse } from '../interfaces/apod-interface';
import { MarsRoverResponse } from '../interfaces/mars-rover-interface';
import { NeoResponse } from '../interfaces/neo-interface';
import { Apod, MarsPhotoSimple, NeoSimple } from '../interfaces/nasa-models';

import { ApodMapper } from '../mappers/apod-mapper';
import { MarsRoverMapper } from '../mappers/mars-rover-mapper';
import { NeoMapper } from '../mappers/neo-mapper';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private http = inject(HttpClient);
  private environment = environment;

  apodData = signal<Apod[]>([]);
  marsPhotos = signal<MarsPhotoSimple[]>([]);
  neoData = signal<NeoSimple[]>([]);
  isLoading = signal<boolean>(false);

  constructor() {
    this.loadTodayApod();
  }

  loadTodayApod() {
    this.isLoading.set(true);

    return this.http.get<ApodResponse>(`${this.environment.urlBase}/planetary/apod`, {
      params: {
        api_key: this.environment.apiKey,
      }
    }).subscribe({
      next: (response) => {
        const apod = ApodMapper.mapApodResponseToApod(response);
        this.apodData.set([apod]);
        this.isLoading.set(false);
      },
      error: () => {
        this.apodData.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadApodByDate(date: string) {
    this.isLoading.set(true);

    return this.http.get<ApodResponse>(`${this.environment.urlBase}/planetary/apod`, {
      params: {
        api_key: this.environment.apiKey,
        date: date
      }
    }).subscribe({
      next: (response) => {
        const apod = ApodMapper.mapApodResponseToApod(response);
        this.apodData.set([apod]);
        this.isLoading.set(false);
      },
      error: () => {
        this.apodData.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadApodRange(startDate: string, endDate: string) {
    this.isLoading.set(true);

    return this.http.get<ApodResponse[]>(`${this.environment.urlBase}/planetary/apod`, {
      params: {
        api_key: this.environment.apiKey,
        start_date: startDate,
        end_date: endDate
      }
    }).subscribe({
      next: (response) => {
        const apods = ApodMapper.mapApodResponseArrayToApods(response);
        this.apodData.set(apods);
        this.isLoading.set(false);
      },
      error: () => {
        this.apodData.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadMarsRoverPhotosBySol(rover: string = 'curiosity', sol: number) {
    this.isLoading.set(true);

    return this.http.get<MarsRoverResponse>(`${this.environment.urlBase}/mars-photos/api/v1/rovers/${rover}/photos`, {
      params: {
        api_key: this.environment.apiKey,
        sol: sol.toString()
      }
    }).subscribe({
      next: (response) => {
        const photos = MarsRoverMapper.mapMarsPhotosToSimple(response.photos);
        this.marsPhotos.set(photos);
        this.isLoading.set(false);
      },
      error: () => {
        this.marsPhotos.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadMarsRoverPhotosByDate(rover: string = 'curiosity', earthDate: string) {
    this.isLoading.set(true);

    return this.http.get<MarsRoverResponse>(`${this.environment.urlBase}/mars-photos/api/v1/rovers/${rover}/photos`, {
      params: {
        api_key: this.environment.apiKey,
        earth_date: earthDate
      }
    }).subscribe({
      next: (response) => {
        const photos = MarsRoverMapper.mapMarsPhotosToSimple(response.photos);
        this.marsPhotos.set(photos);
        this.isLoading.set(false);
      },
      error: () => {
        this.marsPhotos.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadMarsRoverPhotosByCamera(rover: string = 'curiosity', sol: number, camera: string) {
    this.isLoading.set(true);

    return this.http.get<MarsRoverResponse>(`${this.environment.urlBase}/mars-photos/api/v1/rovers/${rover}/photos`, {
      params: {
        api_key: this.environment.apiKey,
        sol: sol.toString(),
        camera: camera
      }
    }).subscribe({
      next: (response) => {
        const photos = MarsRoverMapper.mapMarsPhotosToSimple(response.photos);
        this.marsPhotos.set(photos);
        this.isLoading.set(false);
      },
      error: () => {
        this.marsPhotos.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadNeoFeed(startDate: string, endDate: string) {
    this.isLoading.set(true);

    return this.http.get<NeoResponse>(`${this.environment.urlBase}/neo/rest/v1/feed`, {
      params: {
        api_key: this.environment.apiKey,
        start_date: startDate,
        end_date: endDate
      }
    }).subscribe({
      next: (response) => {
        const allNeos: any[] = [];
        Object.values(response.near_earth_objects).forEach(neos => {
          allNeos.push(...neos);
        });

        const simplifiedNeos = NeoMapper.mapNearEarthObjectsToSimple(allNeos);
        this.neoData.set(simplifiedNeos);
        this.isLoading.set(false);
      },
      error: () => {
        this.neoData.set([]);
        this.isLoading.set(false);
      }
    });
  }

  loadTodayNeos() {
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    this.loadNeoFeed(today, tomorrow);
  }

  formatDateForApi(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  getYesterday(): string {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return this.formatDateForApi(yesterday);
  }

  getWeekAgo(): string {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return this.formatDateForApi(weekAgo);
  }
}
