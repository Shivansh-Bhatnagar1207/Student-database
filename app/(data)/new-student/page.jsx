"use server";
import React from "react";
import { New_Student } from "../../action";
import { currentUser } from "@clerk/nextjs/server";
export default async function page() {
  const user = await currentUser();
  if (!user) {
    return <div>Please sign in to access this page.</div>;
  }

  return (
    <div className="px-8">
      <div className="text-center text-4xl font-bold m-4">
        Enter Student Details
      </div>
      <form className="grid md:grid-cols-2  gap-4 p-4" action={New_Student}>
        {/* Class */}
        <div>
          <input type="text" name="User" hidden defaultValue={user.username} />
          <label className="block " name="Class">
            Class
          </label>
          <select
            className="w-full mt-1 p-2 border rounded"
            name="class"
            required
          >
            <option value="">Select Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* SR No */}
        <div>
          <label className="block">SR No.</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter SR No."
            name="SRno"
            required
          />
        </div>

        {/* Student Name */}
        <div>
          <label className="block">Student Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Student Name"
            name="Student_Name"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block">Gender</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            name="gender"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* DOB */}
        <div>
          <label className="block">Date of Birth</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded"
            name="DOB"
            required
          />
        </div>

        {/* DOA */}
        <div>
          <label className="block">Date of Admission</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded"
            name="DOA"
            required
          />
        </div>

        {/* Aadhaar No */}
        <div>
          <label className="block">Student Aadhaar No.</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Aadhaar No."
            name="Student_Adhaar"
            required
          />
        </div>

        <div>
          <label className="block">Addess</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Address"
            name="Address"
            required
          />
        </div>
        {/* Father's Name */}
        <div>
          <label className="block">Father&apos;s Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Father's Name"
            name="Father_Name"
          />
        </div>
        <div>
          <label className="block">Father&apos;s Adhaar</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Father's Adhaar"
            name="Father_Adhaar"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block">Mother&apos;s Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Mother's Name"
            name="Mother_Name"
          />
        </div>
        <div>
          <label className="block">Mother&apos;s Adhaar</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Mother's Name"
            name="Mother_Adhaar"
          />
        </div>
        <div>
          <label className="block">Care of </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Care of"
            name="Care_Of"
            required
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block">Mobile</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Mobile Number"
            name="Mobile"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Email Address"
            name="Email"
          />
        </div>
        <div>
          <label className="block">Height</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Student's Height"
            name="Height"
          />
        </div>
        <div>
          <label className="block">Weight</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Studentent's Weight"
            name="Weight"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block">Category</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            name="Category"
            required
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-accent w-full ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
