export const dateMDY = (date_iso) => {
    const d = new Date(date_iso);
    const options = {
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    };
    console.log(d.toLocaleString("ru", options));
    return d.toLocaleString("ru", options).split(", ").join(" в ");
}