"use client";

import Confetti from "react-confetti/dist/types/Confetti";
import Image from "next/image";
import InfoBox from "@/components/InfoBox";
import React from "react";
import Ticket from "@/components/ticket";
import html2canvas from "html2canvas";

export default function Home() {
  return (
    <div>
      <InfoBox />
      {/* <Ticket /> */}
    </div>
  );
}
