"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import getMissions from "@/utils/fetchMission";
import { TMissions } from "@/types";
import Counter from "./Counter/Counter";
import Link from "next/link";

export default async function Annonce() {
  const data: TMissions[] = await getMissions();

  return (
    <section>
      <div className="center">
        <Counter number={data.length} />
        <p className="paragraph-big">
          Trouve des missions adapté à tes recherches.
        </p>
        <Link className="button-black" href="/missions">
          Voir les missions
        </Link>
      </div>
    </section>
  );
}
