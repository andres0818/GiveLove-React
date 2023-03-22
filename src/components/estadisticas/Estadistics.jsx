import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Estadistics.module.scss';

const Estadistics = () => {
    const data={
        labels: ['Medellin', 'Bogota', 'Pasto', 'Pasto', 'Nariño'],
        datasets:[{
            label:"Alianzas",
            backgroundColor: '#baabda',
            borderColor: "black",
            borderWidth: 1,
            hoverBackgroundColor: '#041C32',
            data: [8, 2, 1, 1, 2, 1]
        }]
    };
    const opciones={
        maintainAspectRadio: false,
        responsive: true
    }
  return (
    <div className={styles.containers}>
    <h1>Estadisticas de las fundaciones aliadas</h1>
    <div className={styles.chartContainer}>
      <Bar data={data} options={opciones} />
    </div>
  </div>
  )
}

export default Estadistics