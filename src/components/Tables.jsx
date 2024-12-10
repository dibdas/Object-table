import React from "react";
const Todos = {
  MON: {
    "8AM-9AM": {
      title: "Maths",
      teacher: "Mr Smith",
    },
    "9AM-10AM": {
      title: "IT",
      teacher: "Mr Smith",
    },
    "10AM-11AM": {
      title: "English",
      teacher: "Mrs Jones",
    },
    "11AM-12PM": {
      title: "Science",
      teacher: "Mr Smith",
    },
    "12PM-1PM": {
      title: "History",
      teacher: "Mrs Jones",
    },

    "2PM-3PM": {
      title: "Geography",
      teacher: "Mr Smith",
    },
  },
  TUE: {
    "8AM-9AM": {
      title: "Geography",
      teacher: "Mr Smith",
    },
    "9AM-10AM": {
      title: "Physics",
      teacher: "Mrs Johnson",
    },
    "10AM-11AM": {
      title: "Spanish",
      teacher: "Mr Rodriguez",
    },
    "11AM-12PM": {
      title: "Art",
      teacher: "Mrs Williams",
    },
    "12PM-1PM": {
      title: "Physical Education",
      teacher: "Mr Davis",
    },

    "2PM-3PM": {
      title: "Chemistry",
      teacher: "Mr Anderson",
    },
  },
  WED: {
    "8AM-9AM": {
      title: "Maths",
      teacher: "Mr Smith",
    },
    "9AM-10AM": {
      title: "IT",
      teacher: "Mr Smith",
    },
    "10AM-11AM": {
      title: "English",
      teacher: "Mrs Jones",
    },
    "11AM-12PM": {
      title: "Science",
      teacher: "Mr Smith",
    },
    "12PM-1PM": {
      title: "History",
      teacher: "Mrs Jones",
    },

    "2PM-3PM": {
      title: "Geography",
      teacher: "Mr Smith",
    },
  },
  THU: {
    "8AM-9AM": {
      title: "Maths",
      teacher: "Mr Smith",
    },
    "9AM-10AM": {
      title: "Biology",
      teacher: "Mr Davis",
    },
    "10AM-11AM": {
      title: "French",
      teacher: "Mrs Martin",
    },
    "11AM-12PM": {
      title: "Music",
      teacher: "Mr Johnson",
    },
    "12PM-1PM": {
      title: "Physical Education",
      teacher: "Mr Davis",
    },

    "2PM-3PM": {
      title: "Maths",
      teacher: "Mr Smith",
    },
  },
  FRI: {
    "8AM-9AM": {
      title: "Chemistry",
      teacher: "Mr Anderson",
    },
    "9AM-10AM": {
      title: "History",
      teacher: "Mrs Jones",
    },
    "10AM-11AM": {
      title: "Computer Science",
      teacher: "Mr Rodriguez",
    },
    "11AM-12PM": {
      title: "Physics",
      teacher: "Mrs Johnson",
    },
    "12PM-1PM": {
      title: "Geography",
      teacher: "Mr Smith",
    },

    "2PM-3PM": {
      title: "English",
      teacher: "Mrs Jones",
    },
  },
};

function Tables() {
  console.log(Todos);
  console.log(typeof Todos);
  console.log(typeof Object.entries(Todos));
  console.log(Object.entries(Todos));
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Weekly Timetable
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(Todos).map(([day, slots], dayIndex) => (
          <div
            key={dayIndex}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-4"
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-500">{day}</h2>
            <ul>
              {Object.entries(slots).map(
                ([time, { teacher, title }], slotIndex) => (
                  <li
                    key={slotIndex}
                    className="flex justify-between items-center border-b border-gray-100 py-2"
                  >
                    <div className="text-sm font-medium text-gray-800">
                      <span className="block text-gray-600">{time}</span>
                      <span className="block">{title}</span>
                    </div>
                    <span className="text-sm italic text-gray-500">
                      {teacher}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tables;
