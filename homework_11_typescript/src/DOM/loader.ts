import {getElementById, getFirstElementBySelector} from './DOM_manipulation'

export const main = getElementById('loaderId');
export const l_one = getFirstElementBySelector(main, '.loader-one');
export const l_two = getFirstElementBySelector(main, '.loader-two');