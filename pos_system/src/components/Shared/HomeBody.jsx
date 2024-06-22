import React from 'react';
import styles from './HomeBody.module.css';

const HomeBody = () => {
  return (
    <>
      <div className={styles.backGroundimg}>
        <img src="/back.jpeg" alt="cover" className={styles.image} />
        <p className={styles.theme}>Freshness is Our Passion</p>
      </div>
    </>
  );
}

export default HomeBody;
