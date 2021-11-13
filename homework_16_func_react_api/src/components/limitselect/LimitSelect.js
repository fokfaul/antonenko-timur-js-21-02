import React from 'react';
import './LimitSelect.css';
import {limitUsers} from '../../constants/navigation/common';

export const LimitSelect = ({changeLimit}) => {
    const handleChange = (limit) => {changeLimit(limit)};

    return(
      <div className="limit-form">
          <label>Количество элементов:</label>
          <select className="limit-select" onChange={(e) => handleChange(e.target.value)}>
              {limitUsers.map((elem, index) => (
                  <option value={elem} key={index}>{elem}</option>
              ))}
          </select>
      </div>
    );
};