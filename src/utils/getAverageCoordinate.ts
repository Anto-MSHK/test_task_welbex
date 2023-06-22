import { TransportListT } from "../screens/Home/Home";

/**
 * Getting the average value for points on the map. It is necessary for the correct display of vehicles.
 * @param {TransportListT[]} data - Information about vehicles. Has the type TransportListT[].
 */
export const getAverageCoordinate = (data: TransportListT[]) => {
  let totalLatitude = 0;
  let totalLongitude = 0;
  let minLatitude = data[0].coordinate.latitude;
  let maxLatitude = data[0].coordinate.latitude;
  let minLongitude = data[0].coordinate.longitude;
  let maxLongitude = data[0].coordinate.longitude;

  for (let i = 0; i < data.length; i++) {
    const latitude = data[i].coordinate.latitude;
    const longitude = data[i].coordinate.longitude;

    if (latitude < minLatitude) {
      minLatitude = latitude;
    } else if (latitude > maxLatitude) {
      maxLatitude = latitude;
    }

    if (longitude < minLongitude) {
      minLongitude = longitude;
    } else if (longitude > maxLongitude) {
      maxLongitude = longitude;
    }

    totalLatitude += data[i].coordinate.latitude;
    totalLongitude += data[i].coordinate.longitude;
  }
  return {
    averageLatitude: totalLatitude / data.length,
    averageLongitude: totalLongitude / data.length,
    averageLatitudeD: maxLatitude - minLatitude + 10,
    averageLongitudeD: maxLongitude - minLongitude + 10,
  };
};
