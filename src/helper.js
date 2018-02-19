export const connectToFitBit = async () => {
  const response = await fetch('api/authorize');
  console.log(response);
}