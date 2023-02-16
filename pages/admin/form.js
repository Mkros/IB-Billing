import React from "react";
import cardTable1 from "components/Cards/cardTable1";
import MyCardtable from "components/Cards/MyCardTable";
// components
// layout for page

import Admin from "layouts/Admin.js";

export default function Form(color) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MyCardtable />
          </div>
        </div>
      </div>
    </>
  );
}

Form.layout = Admin;
