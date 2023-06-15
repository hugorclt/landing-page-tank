import { TMissions } from "@/types";
import styles from "./page.module.css";
import getMissions from "@/utils/fetchMission";
import { useState } from "react";
import MissionDisplay from "../components/Missions/MissionDisplay";

export default async function Mission() {
  const data: TMissions[] = await getMissions();

  return (
    <section>
      <MissionDisplay data={data} />
    </section>
  );
}
