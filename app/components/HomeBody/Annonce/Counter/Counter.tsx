"use client";
import CountUp from "react-countup";
type TCounterProps = {
  number: number;
};

export default function Counter({ number }: TCounterProps) {
  return (
    <>
      <h2>
        <span>
          <CountUp duration={10} className="counter" end={number} />
        </span>
         {" "}missions disponibles
      </h2>
    </>
  );
}
