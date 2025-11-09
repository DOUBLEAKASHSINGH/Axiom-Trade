"use client";
import React from 'react';
import styles from './AnimatedBackground.module.css';

export const AnimatedBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={`${styles.shape} ${styles.shape1}`}></div>
      <div className={`${styles.shape} ${styles.shape2}`}></div>
      <div className={`${styles.shape} ${styles.shape3}`}></div>
      <div className={`${styles.shape} ${styles.shape4}`}></div>
    </div>
  );
};