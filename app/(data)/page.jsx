"use client";
import Link from "next/link";
import React from "react";
import Card from "../_components/Card";

export default function Home() {
  return (
    <div className="p-10 flex justify-around">
      <Card
        title={"Add Student"}
        desc={"test test test test test test"}
        img={"Stundent"}
        link={"new-student"}
      />
      <Card
        title={"All Students"}
        desc={"test test test test test test"}
        img={"All_student"}
        link={"all-students"}
      />

    </div>
  );
}
