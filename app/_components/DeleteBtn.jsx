"use server";

import { db } from "../lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export async function deleteStudent(studentId) {
  try {
    await deleteDoc(doc(db, "Students", studentId));
    console.log(`Student with ID ${studentId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting student:", error);
    throw new Error("Failed to delete the student. Please try again.");
  }
}
