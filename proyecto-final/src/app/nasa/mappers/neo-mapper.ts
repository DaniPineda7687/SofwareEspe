import { NearEarthObject } from "../interfaces/neo-interface";
import { NeoSimple } from "../interfaces/nasa-models";

export class NeoMapper {
  static mapNearEarthObjectToSimple(item: NearEarthObject): NeoSimple {
    const closeApproach = item.close_approach_data[0];

    return {
      id: item.id,
      name: item.name,
      estimatedDiameterKm: {
        min: item.estimated_diameter.kilometers.estimated_diameter_min,
        max: item.estimated_diameter.kilometers.estimated_diameter_max
      },
      closeApproachDate: closeApproach.close_approach_date,
      missDistanceKm: closeApproach.miss_distance.kilometers,
      velocityKmH: closeApproach.relative_velocity.kilometers_per_hour,
      isPotentiallyHazardous: item.is_potentially_hazardous_asteroid,
      absoluteMagnitude: item.absolute_magnitude_h
    };
  }

  static mapNearEarthObjectsToSimple(items: NearEarthObject[]): NeoSimple[] {
    return items.map(this.mapNearEarthObjectToSimple);
  }
}
