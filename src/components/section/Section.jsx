import React from "react";
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <p className={css.title}>{title}</p>
      {children}
    </>
  );
};