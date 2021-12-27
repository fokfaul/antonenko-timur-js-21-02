import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import mockFetch from 'jest-fetch-mock';
import React from "react"
import './locale/i18next';

mockFetch.enableMocks();
React.useLayoutEffect = React.useEffect
window.scrollTo = jest.fn();
  delete window.matchMedia
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })
window.alert = (text) => <p className="alert-text">text</p>;
configure({ adapter: new Adapter() });