"use client"; // Enables client-side interactivity

import React from "react";
import ExcelJS from "exceljs";

export default function ExportButton({ students }) {
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Students");

    // Add header row
    worksheet.columns = [
      { header: "Sr No", key: "SRNo", width: 10 },
      { header: "Name", key: "Student_Name", width: 20 },
      { header: "Class", key: "Class", width: 10 },
      { header: "Student Adhaar", key: "Student_Adhaar", width: 20 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "Father's Name", key: "Father_Name", width: 20 },
      { header: "Father's Adhaar", key: "Father_Adhaar", width: 20 },
      { header: "Mother's Name", key: "Mother_Name", width: 20 },
      { header: "Mother's Adhaar", key: "Mother_Adhaar", width: 20 },
      { header: "Guardian's Name", key: "Guardian_Name", width: 20 },
      { header: "Category", key: "Catigory", width: 15 },
      { header: "C/O", key: "Care_of", width: 10 },
      { header: "Address", key: "Address", width: 30 },
      { header: "Mobile", key: "Mobile", width: 15 },
      { header: "Email", key: "Email", width: 25 },
      { header: "DOB", key: "DOB", width: 15 },
      { header: "DOA", key: "DOA", width: 15 },
    ];

    // Add rows
    students.forEach((student) => {
      worksheet.addRow({
        SrNo: student.SrNo || "N/A",
        Student_Name: student.Student_Name || "N/A",
        Class: student.Class || "N/A",
        Student_Adhaar: student.Student_Adhaar || "N/A",
        Gender: student.Gender || "N/A",
        Father_Name: student.Father_Name || "N/A",
        Father_Adhaar: student.Father_Adhaar || "N/A",
        Mother_Name: student.Mother_Name || "N/A",
        Mother_Adhaar: student.Mother_Adhaar || "N/A",
        Guardian_Name: student.Guardian_Name || "N/A",
        Social_Catigory: student.Social_Catigory || "N/A",
        Care_of: student.Care_of || "N/A",
        Address: student.Address || "N/A",
        Mobile: student.Mobile || "N/A",
        Email: student.Email || "N/A",
        DOB: student.DOB || "N/A",
        DOA: student.DOA || "N/A",
      });
    });

    // Export the file
    const buffer = await workbook.xlsx.writeBuffer();

    // Trigger file download
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Students_Data.xlsx";
    link.click();
  };

  return (
    <button onClick={exportToExcel} className="btn btn-accent">
      Export to Excel
    </button>
  );
}
