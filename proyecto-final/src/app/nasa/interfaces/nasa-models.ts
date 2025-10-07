export interface Apod {
  id: string;
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdUrl?: string;
  mediaType: string;
  copyright?: string;
}

export interface MarsPhotoSimple {
  id: number;
  imageUrl: string;
  earthDate: string;
  sol: number;
  cameraName: string;
  cameraFullName: string;
  roverName: string;
  roverStatus: string;
}

export interface NeoSimple {
  id: string;
  name: string;
  estimatedDiameterKm: {
    min: number;
    max: number;
  };
  closeApproachDate: string;
  missDistanceKm: string;
  velocityKmH: string;
  isPotentiallyHazardous: boolean;
  absoluteMagnitude: number;
}