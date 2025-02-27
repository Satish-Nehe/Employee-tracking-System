import React from "react";
import { offices } from "../Offices_data";
import { Link } from "react-router";

export default function Cards() {
  return (
    <>
    <h1 className="text-3xl py-5 font-bold text-center">Offices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {offices.map((office) => {
        return (
          <Link key={office.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-black" to={`/offices-data/${office.city}`}>
            <div className="relative h-48 overflow-hidden">
              <img
                src={`${office.imageUrl}?auto=format&fit=crop&w=800&q=80`}
                alt={office.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{office.name}</h3>
              <p className="text-gray-600">{office.city}, {office.country}</p>
              <div className="mt-3 flex items-center text-gray-500">
                <span>{office.employeeCount} employees</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
   </>

  );
}
