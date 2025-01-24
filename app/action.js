'use server';
import { db } from "./lib/firebase";
import { addDoc, collection } from "firebase/firestore";
export async function New_Student(formdata) {
    try {

        const docRef = await addDoc(collection(db, 'Students'), {
            user: formdata.get('User'),
            SRno: formdata.get('SRno'),
            class: formdata.get('Class'),
            Student_Name: formdata.get('Student_Name'),
            gender: formdata.get('gender'),
            DOB: formdata.get('DOB'),
            DOA: formdata.get('DOA'),
            Student_Adhaar: formdata.get('Student_Adhaar'),
            Address: formdata.get('Address'),
            Father_Name: formdata.get('Father_Name'),
            Father_Adhaar: formdata.get('Father_Adhaar'),
            Mother_Name: formdata.get('Mother_Name'),
            Mother_Adhaar: formdata.get('Mother_Adhaar'),
            Care_Of: formdata.get('Care_Of'),
            Mobile: formdata.get('Mobile'),
            Email: formdata.get('Email'),
            Weight: formdata.get('Weight'),
            Height: formdata.get('Height'),
            Category: formdata.get('Category'),
        });
        console.log('document created');

    } catch (e) {
        console.error(e);

    }
}
