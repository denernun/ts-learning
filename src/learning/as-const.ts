const latLong = [39.807222, -76.984722] as const;

function logLatLong([lat, long]: readonly [number, number]): void {
  console.log(`Latitude: ${lat} Longitude: ${long}`);
}
logLatLong(latLong);

function logLatLong2(lat: number, long: number): void {
  console.log(`Latitude: ${lat} Longitude: ${long}`);
}
logLatLong2(...latLong);
