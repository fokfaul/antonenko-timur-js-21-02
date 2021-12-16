const joiner = {en: " in ", ru: " в "};

exports.dateMDY = (date_iso, language) => {
    const d = date_iso ? new Date(date_iso) : new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return d.toLocaleString(language, options);
}
exports.dateDMT = (date_iso, language) => {
    const d = date_iso ? new Date(date_iso) : new Date();
    const options = {
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    };
    return d.toLocaleString(language, options).split(", ").join(joiner[language]);
}