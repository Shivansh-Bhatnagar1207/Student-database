"use server";

import React from "react";
import { db } from "../../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { currentUser } from "@clerk/nextjs/server";
import ExportButton from "../../_components/ExportBtn";

export default async function page() {
  const user = await currentUser();

  if (!user) {
    return <div>Please sign in to access this page.</div>;
  }

  const StudentDoc = collection(db, "Students");
  const StudentQuery = query(StudentDoc, where("user", "==", user.username));
  const querySnapshot = await getDocs(StudentQuery);

  // Populate the Students array with query results
  const Students = querySnapshot.docs.map((doc) => ({
    id: doc.id, // Add document ID for referencing
    ...doc.data(), // Spread the document fields
  }));

  return (
    <div className="px-8">
      <div className="text-center text-4xl font-bold p-4">
        List of all Students
      </div>

      {Students.length > 0 ? (
        <>
          <div className="text-right mb-4">
            <ExportButton students={Students} />
          </div>
          <div className="overflow-auto">
            <table className="table rounded-full text-black">
              <thead>
                <tr className="bg-primary text-black">
                  <th className="border border-gray-300 px-4 py-2">Sr No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Student Adhaar
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Father&apos;s Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Father&apos;s Adhaar
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Mother&apos;s Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Mother&apos;s Adhaar
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Guardian&apos;s Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">C/O</th>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Address</th>
                  <th className="border border-gray-300 px-4 py-2">Mobile</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">D.O.A</th>
                  <th className="border border-gray-300 px-4 py-2">DOB</th>
                  <th className="border border-gray-300 px-4 py-2">Height</th>
                  <th className="border border-gray-300 px-4 py-2">Weight</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Delete Student
                  </th>
                </tr>
              </thead>
              <tbody>
                {Students.map((student) => (
                  <tr key={student.id} className="bg-white">
                    <td className="border border-gray-300 px-4 py-2">
                      {student.SRno}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Student_Name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Class}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Student_Adhaar}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.gender}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Father_Name || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Father_Adhaar || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Mother_Name || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Mother_Adhaar || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Guardian_Name || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Care_Of || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Category || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Address}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Mobile}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Email || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.DOA}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.DOB}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.height}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Weight}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-4">No students found.</div>
      )}
    </div>
  );
}
