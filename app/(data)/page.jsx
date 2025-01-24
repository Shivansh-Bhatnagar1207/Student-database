"use client";
import React from "react";
import Card from "../_components/Card";

export default function Home() {
  return (
    <div className="p-10 flex justify-around">
      <Card
        title={"Add Student"}
        desc={"Click here to Add a student data in the database"}
        img={"Stundent"}
        link={"new-student"}
      />
      <Card
        title={"All Students"}
        desc={"Click here to Display and download all the students data"}
        img={"All_student"}
        link={"all-students"}
      />

    </div>
  );
}
