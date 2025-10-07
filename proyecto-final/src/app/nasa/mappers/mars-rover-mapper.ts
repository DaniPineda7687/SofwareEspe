import { MarsPhoto } from "../interfaces/mars-rover-interface";
import { MarsPhotoSimple } from "../interfaces/nasa-models";

export class MarsRoverMapper {
  static mapMarsPhotoToSimple(item: MarsPhoto): MarsPhotoSimple {
    return {
      id: item.id,
      imageUrl: item.img_src,
      earthDate: item.earth_date,
      sol: item.sol,
      cameraName: item.camera.name,
      cameraFullName: item.camera.full_name,
      roverName: item.rover.name,
      roverStatus: item.rover.status
    };
  }

  static mapMarsPhotosToSimple(items: MarsPhoto[]): MarsPhotoSimple[] {
    return items.map(this.mapMarsPhotoToSimple);
  }
}