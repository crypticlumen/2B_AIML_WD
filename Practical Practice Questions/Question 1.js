// Question 1 : Student Notifition System /-
// Create a system EventEmitter that performs the following operations:
// 1. Create a event named studentRegistered.
// 2. When the event is triggered, displayed the student's name and roll number.
// 3. Create another event named studentLogout.
// 4. Display an appropriate message when the student logs out.

const EventEmitter = require('events');

const student = new EventEmitter()

student.on('studentRegistered', (name, rollno) => {
    console.log("Name:", name)
    console.log("Roll Number:", rollno)
})

student.on('studentLogout', () => {
    console.log("Student has logged out succesfully.")
})

student.emit('studentRegistered', 'Max', 86)
student.emit('studentLogout')