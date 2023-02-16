import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
export default function MyCardtable({ color }) {
  return (
    <table className="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
        <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Serial no.
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Project
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Budget
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Status
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Users
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Completion
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          ></th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td> 1 </td>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 2 </td>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 3 </td>

            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 4 </td>

            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 5 </td>

            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 6 </td>

            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 7 </td>

            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td> 8 </td>

            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
          <td > 9 </td>

            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
      </tbody>
    </table>
  );
}