import React from "react";
import css from './Filter.module.css'

export const Filter = (props) => {
  const { filter, handleFilterChange } = props;

  return (
    <input
      className={css.input}
      value={filter}
      onChange={handleFilterChange}
      type="text"
    />
  );
};