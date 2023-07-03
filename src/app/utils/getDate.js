export const getDate = (temp) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateTime = new Date(temp);
  return dateTime.toLocaleDateString("en-US", options);
};
