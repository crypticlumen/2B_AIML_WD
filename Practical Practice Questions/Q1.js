const EventEmitter = require('events');
const exam = new EventEmitter();

// Exam Started
exam.on('examStarted', () => {
    console.log("Examination Started!");
});

// Answer Submitted
exam.on('answerSubmitted', (roll, answer) => {
    console.log("Roll Number:", roll);
    console.log("Submitted Answer:", answer);
});

// Time Warning
exam.on('timeWarning', () => {
    console.log("Warning! Only 5 minutes remaining.");
});

// Exam Completed
exam.on('examCompleted', () => {
    console.log("Examination Completed!");
});

// Exam Submitted
exam.on('examSubmitted', () => {
    console.log("Student has submitted the examination.");
});

// Trigger Events
exam.emit('examStarted');
exam.emit('answerSubmitted', 101, 'EventEmitter is used to handle events.');
exam.emit('timeWarning');
exam.emit('examCompleted');
exam.emit('examSubmitted');