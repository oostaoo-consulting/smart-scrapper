import React from 'react';
import styles from './loader.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.ldsRing}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loader;
