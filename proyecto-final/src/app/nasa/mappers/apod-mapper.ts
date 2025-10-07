import { ApodResponse } from "../interfaces/apod-interface";
import { Apod } from "../interfaces/nasa-models";

export class ApodMapper {
  static mapApodResponseToApod(item: ApodResponse): Apod {
    return {
      id: item.date,
      title: item.title,
      date: item.date,
      explanation: item.explanation,
      url: item.url,
      hdUrl: item.hdurl,
      mediaType: item.media_type,
      copyright: item.copyright
    };
  }

  static mapApodResponseArrayToApods(items: ApodResponse[]): Apod[] {
    return items.map(this.mapApodResponseToApod);
  }
}
