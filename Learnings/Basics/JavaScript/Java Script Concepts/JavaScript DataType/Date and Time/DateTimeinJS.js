// Create a new Date object representing the current date and time
let mydate = new Date();

// ===== Date Conversion Methods (return string representations) =====

// Returns a human-readable date string (e.g., "Mon May 27 2025")
console.log("toDateString():", mydate.toDateString());

// Returns an ISO 8601 formatted string (e.g., "2025-05-27T09:30:00.000Z")
console.log("toISOString():", mydate.toISOString());

// Returns a JSON-friendly ISO string (same as toISOString)
console.log("toJSON():", mydate.toJSON());

// Returns date in local format (e.g., "5/27/2025" or "27/5/2025" based on locale)
console.log("toLocaleDateString():", mydate.toLocaleDateString());

// Returns time in local format (e.g., "3:25:00 PM")
console.log("toLocaleTimeString():", mydate.toLocaleTimeString());

// Returns UTC format string (e.g., "Tue, 27 May 2025 09:30:00 GMT")
console.log("toUTCString():", mydate.toUTCString());

// Returns full local date and time string (e.g., "5/27/2025, 3:25:00 PM")
console.log("toLocaleString():", mydate.toLocaleString());

// Returns full string representation of the date (e.g., "Tue May 27 2025 15:25:00 GMT+0530")
console.log("toString():", mydate.toString());

// ===== Get Methods (extract individual components) =====

// Returns the day of the month (1 - 31)
console.log("getDate():", mydate.getDate());

// Returns the day of the week (0 - 6), where 0 = Sunday
console.log("getDay():", mydate.getDay());

// Returns the full year (e.g., 2025)
console.log("getFullYear():", mydate.getFullYear());

// Returns the hour (0 - 23)
console.log("getHours():", mydate.getHours());

// Returns milliseconds (0 - 999)
console.log("getMilliseconds():", mydate.getMilliseconds());

// Returns the minutes (0 - 59)
console.log("getMinutes():", mydate.getMinutes());

// Returns the month (0 - 11), where 0 = January
console.log("getMonth():", mydate.getMonth());

// Returns the seconds (0 - 59)
console.log("getSeconds():", mydate.getSeconds());

// Returns the number of milliseconds since January 1, 1970
console.log("getTime():", mydate.getTime());

// Returns the time-zone offset in minutes (e.g., -330 for IST)
console.log("getTimezoneOffset():", mydate.getTimezoneOffset());

// ===== UTC equivalents =====

// Returns the UTC day of the month (1 - 31)
console.log("getUTCDate():", mydate.getUTCDate());

// Returns the UTC day of the week (0 - 6)
console.log("getUTCDay():", mydate.getUTCDay());

// Returns the UTC full year
console.log("getUTCFullYear():", mydate.getUTCFullYear());

// Returns the UTC hours (0 - 23)
console.log("getUTCHours():", mydate.getUTCHours());

// Returns the UTC minutes (0 - 59)
console.log("getUTCMinutes():", mydate.getUTCMinutes());

// Returns the UTC seconds (0 - 59)
console.log("getUTCSeconds():", mydate.getUTCSeconds());

// Returns the UTC month (0 - 11)
console.log("getUTCMonth():", mydate.getUTCMonth());

// ===== Other Useful Methods =====

// Returns the primitive value of the Date object (same as getTime)
console.log("valueOf():", mydate.valueOf());

// Returns the internal [[Class]] of the object (from Object.prototype.toString)
console.log("Object.prototype.toString.call(mydate):", Object.prototype.toString.call(mydate));

// Check if date is valid
console.log("isNaN(mydate):", isNaN(mydate));

// Custom format example
console.log(
  "Custom Format:",
  `${mydate.getDate()}/${mydate.getMonth() + 1}/${mydate.getFullYear()} ${mydate.getHours()}:${mydate.getMinutes()}`
);
