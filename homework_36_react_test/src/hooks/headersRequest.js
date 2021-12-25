import i18next from 'i18next';

export const ownRequestHeaders = (conHead = false) => {
    const content = conHead ? {'Content-Type': 'application/json;charset=utf-8'} : {}
    return new Headers({ ...conHead, 'Accept-Language': i18next.t("data.accept_language") })
}