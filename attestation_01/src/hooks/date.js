export const dateMDY = (date_iso) => {
    const d = date_iso ? new Date(date_iso) : new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return d.toLocaleString("ru", options);
}
export const dateDMT = (date_iso) => {
    const d = date_iso ? new Date(date_iso) : new Date();
    const options = {
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    };
    return d.toLocaleString("ru", options).split(", ").join(" в ");
}