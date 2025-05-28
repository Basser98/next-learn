// pages/start.js
import { useState } from 'react';
import Head from 'next/head';
import Fuse from 'fuse.js';
import _ from 'lodash';

import { countries } from '../countries';
import styles from '../styles/Home.module.css';
import CodeSampleModal from '../components/CodeSampleModal';

export default function Start({ countries }) {
  const [results, setResults] = useState(countries);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fuse = new Fuse(countries, {
    keys: ['name'],
    threshold: 0.3,
  });

  return (
    <>
      <Head>
        <title>Core Web Vitals</title>
        <meta name="description" content="Core web vitals walk through" />
      </Head>
      {/* 这里不需要 Navbar，除非你想加 */}
      <main className={styles.container}>{/* ...原来 Start 的内容 */}</main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      countries: countries.map((country) => ({
        name: country.name,
        cca2: country.cca2,
        population: country.population,
      })),
    },
  };
}
