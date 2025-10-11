import { InsightWeatherResponse, SolData } from "../interfaces/insight-interface";
import { InsightWeatherSimple } from "../interfaces/insight-models";

export class InsightMapper {
  static mapInsightWeatherToSimple(response: InsightWeatherResponse): InsightWeatherSimple[] {
    const solKeys = response.sol_keys || [];

    return solKeys.map(sol => {
      const solData: SolData = response[sol];

      const weatherData: InsightWeatherSimple = {
        sol: sol,
        season: solData.Season || 'unknown',
        firstUTC: solData.First_UTC,
        lastUTC: solData.Last_UTC
      };

      if (solData.AT) {
        weatherData.temperature = {
          average: solData.AT.av,
          min: solData.AT.mn,
          max: solData.AT.mx,
          count: solData.AT.ct
        };
      }

      if (solData.HWS) {
        weatherData.windSpeed = {
          average: solData.HWS.av,
          min: solData.HWS.mn,
          max: solData.HWS.mx,
          count: solData.HWS.ct
        };
      }

      if (solData.PRE) {
        weatherData.pressure = {
          average: solData.PRE.av,
          min: solData.PRE.mn,
          max: solData.PRE.mx,
          count: solData.PRE.ct
        };
      }

      if (solData.WD && solData.WD.most_common) {
        weatherData.windDirection = {
          mostCommon: solData.WD.most_common.compass_point,
          compassDegrees: solData.WD.most_common.compass_degrees,
          count: solData.WD.most_common.ct
        };
      } else {
        weatherData.windDirection = null;
      }

      return weatherData;
    });
  }
}
