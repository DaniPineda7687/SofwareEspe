export interface InsightWeatherSimple {
  sol: string;
  season: string;
  firstUTC: string;
  lastUTC: string;
  temperature?: {
    average: number;
    min: number;
    max: number;
    count: number;
  };
  windSpeed?: {
    average: number;
    min: number;
    max: number;
    count: number;
  };
  pressure?: {
    average: number;
    min: number;
    max: number;
    count: number;
  };
  windDirection?: {
    mostCommon: string;
    compassDegrees: number;
    count: number;
  } | null;
}
