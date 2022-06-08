let myTodoForToday = {
  day: 'Sunday',
  meetings: 0,
  meetingsDone: 0
};

let addMeeting = (todo, numMeeting = 0) => {
  todo.meetings = todo.meetings + numMeeting;
}

let meetingsDone = (todo, numMeeting = 0) => {
  todo.meetingsDone = todo.meetingsDone - numMeeting;
};

let resetAllMeetings = (todo) => {
  todo.meetings = 0;
  todo.meetingsDone = 0;
};

let getSummaryOfDay = (todo) => {
  let meetingsLeft = todo.meetings + todo.meetingsDone;
  return `You have ${meetingsLeft} meetings today`
}

addMeeting(myTodoForToday, 2);
addMeeting(myTodoForToday, 3);
meetingsDone(myTodoForToday, 1);

console.log(myTodoForToday);
console.log(getSummaryOfDay(myTodoForToday));