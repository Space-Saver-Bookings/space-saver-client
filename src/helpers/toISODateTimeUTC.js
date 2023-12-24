// Helper function to convert date and time to ISO UTC string
export const toISODateTimeUTC = (date, time) => {
  const dateTime = new Date(`${date} ${time}`);
  const timeOffset = dateTime.getTimezoneOffset() * 60000;
  const utcTime = new Date(dateTime.getTime() + timeOffset);
  return utcTime.toISOString();
};
