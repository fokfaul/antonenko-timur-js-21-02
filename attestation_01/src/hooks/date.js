export const dateMDY = (date_iso) => {
    const d = new Date(date_iso);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return d.toLocaleString("ru", options);
}
export const dateDMT = (date_iso) => {
    const d = new Date(date_iso);
    const options = {
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    };
    return d.toLocaleString("ru", options).split(", ").join(" в ");
}