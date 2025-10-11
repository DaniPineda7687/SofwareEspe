export interface InsightWeatherResponse {
  sol_keys: string[];
  validity_checks: {
    [sol: string]: {
      AT: { valid: boolean; sol_hours_required: number; sol_hours_with_data: number[] };
      HWS: { valid: boolean; sol_hours_required: number; sol_hours_with_data: number[] };
      PRE: { valid: boolean; sol_hours_required: number; sol_hours_with_data: number[] };
      WD: { valid: boolean; sol_hours_required: number; sol_hours_with_data: number[] };
    };
  };
  [sol: string]: any;
}

export interface SolData {
  AT?: TemperatureData;
  HWS?: WindSpeedData;
  PRE?: PressureData;
  WD?: WindDirectionData;
  First_UTC: string;
  Last_UTC: string;
  Season: string;
}

export interface TemperatureData {
  av: number;
  ct: number;
  mn: number;
  mx: number;
}

export interface WindSpeedData {
  av: number;
  ct: number;
  mn: number;
  mx: number;
}

export interface PressureData {
  av: number;
  ct: number;
  mn: number;
  mx: number;
}

export interface WindDirectionData {
  most_common?: {
    compass_degrees: number;
    compass_point: string;
    compass_right: number;
    compass_up: number;
    ct: number;
  } | null;
  [compassPoint: string]: any;
}
