import React, { useEffect, useState } from "react";
import styles from "./UseGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
export const UserGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((i) => {
      return {
        x: i.title,
        y: Number(i.acessos),
      };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );
    setGraph(graphData);
  }, [data]);
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.items}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.items}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.items}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}>

          </VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};
