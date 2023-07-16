export const celcFromKalv = (kalv: number) => {
  return round(kalv - 273.15);
};

export const mPerSecToKmPerHour = (meters: number) => {
  return round(meters * 3.16);
};

const round = (num: number) => {
  return Math.round(num * 100) / 100;
};
