'use client'
import { TMissions } from "@/types";
import styles from "./page.module.css";
import LittleCard from "./LittleCard/LittleCard";
import { useState } from "react";
import BigCard from "./BigCard/BigCard";

type TMissionProps = {
  data: TMissions[];
};

export default function MissionDisplay({ data }: TMissionProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.missionContainer}>
      <div className={styles.missionLeft}>
        {data.map((mission, idx) => {
          return (
            <div style={{border: idx === selected ? "1px solid blue" : "none"}} className={styles.cardContainer} onClick={() => setSelected(idx)}>
              <LittleCard key={mission.id} {...mission} />
            </div>
          );
        })}
      </div>
      <div className={styles.missionRight}>
        {selected != -1 ? <BigCard {...data[selected]} /> : <></>}
      </div>
    </div>
  );
}
