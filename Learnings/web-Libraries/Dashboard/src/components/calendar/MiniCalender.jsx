import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./MiniCalendar.css"; // you can keep custom overrides here if needed

export default function MiniCalendar({ selectRange }) {
  const [value, setValue] = useState(new Date());

  return (
    <div
      className="flex flex-col items-center w-full max-w-max p-5 bg-white rounded-2xl shadow-md"
    >
      <Calendar
        onChange={setValue}
        value={value}
        selectRange={selectRange}
        view="month"
        prevLabel={<MdChevronLeft className="w-6 h-6 text-gray-600" />}
        nextLabel={<MdChevronRight className="w-6 h-6 text-gray-600" />}
        tileContent={<span className="text-blue-500"></span>}
      />
    </div>
  );
}
