export const dateMDY = (date_iso) => {
    const d = new Date(date_iso);
    return d.toString().split(" ").slice(1, 4).join(" ");
}