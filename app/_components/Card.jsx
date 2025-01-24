import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Card({ img, title, desc, link }) {

  return (
    <div className="card bg-primary-content w-96 border border-black shadow-xl text-white">
      <figure className="px-10 pt-10">
        <Image
          src={`/${img}.png`}
          alt="Students"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions">
          <Link className="btn btn-primary" href={`/${link}`}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
