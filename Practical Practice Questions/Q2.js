const EventEmitter = require('events');
const event = new EventEmitter();

let present = 0; let absent = 0;

// Event: Student Present
event.on('studentPresent', (name, roll, subject) => {
    console.log("\nStudent Present");
    console.log("Name:", name);
    console.log("Roll Number:", roll);
    console.log("Subject:", subject);
    present++;
});

// Event: Student Absent
event.on('studentAbsent', (name, roll) => {
    console.log("\nStudent Absent");
    console.log(name, "with Roll Number", roll, "is absent.");
    absent++;
});

// Event: Attendance Summary
event.on('attendanceSummary', () => {
    console.log("\nAttendance Summary");
    console.log("Present Students:", present);
    console.log("Absent Students:", absent);
});

// Trigger events
event.emit('studentPresent', 'Rahul', 101, 'JavaScript');
event.emit('studentPresent', 'Aman', 102, 'Python');
event.emit('studentAbsent', 'Rohit', 103);
event.emit('attendanceSummary');