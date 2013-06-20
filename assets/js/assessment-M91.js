// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var assessment = {
  // HTML to display at the start of the page
  preamble: '<b>Community Assessment, mutiple-choice questions. Module 9. Please answer <B>all<B> questions below</b><br><br>',

  questionsList: [

  {questionHTML: 'City with 10 active pwk. Started Radio and TV. 50 people are introduced to the message, per month. Around 400 interested people will come to an event with Prem Rawat.<br>What Potential score would you give to this city?</b><br><br>',
     choices : ['6',
	        '7',
	       correct('8'),
	       correct('9'),
	      '10'],
     lesson: '9.1'},

  {questionHTML: 'City with 180-200 active pwk. Increased interest in GPI activities. 25 to 30 people are introduced to the message, per month. For an event with M, 400 to 500 interested people will come.<br>What Potential score would you give to this city?</b><br>',
     choices : ['6',
	       correct('7'),
	       correct('8'),
	       '9',
	      '10'],
     lesson: '9.1'}, 	  


  {questionHTML:  'In a mid-sized town, there is a pwk community of 50. 10 are passionate about propagation. They are doing a  event every weekend, in which 1 new person attends each time.<br>What Potential score would you give to this city?</b><br><br>',
    choices : [correct('3'),
	       correct('4'),
	      '5',
	      '6',
	      '7'],
    lesson: '9.1'},

  {questionHTML:  'In a small town, there is a pwk community of 400, 5 are passionate about propagation. They are doing 2 different initiatives each week, and they have a TV initiative that is estimated to be seen by 1000 people each month. For an event with Prem Rawat, 5000 to 6000 interested people will come<br>What Potential score would you give to this city?</b><br><br>',
    choices : ['3 or 4',
	      '5 or 6',
	      '7 or 8',
	      correct('9 or 10')],
    lesson: '9.1'},


  {questionHTML:  'In a small town, there is a pwk community of 30. There is no propagation happening. They do local pwk events to keep themselves inspired.<br>What Potential score would you give to this city?</b><br><br>',
    choices : [correct('1'),
	       correct('2'),
	      '3',
	      '4',
	      '5'],
    lesson: '9.1'},


],
  assessmentName: 'a9course', // unique name submitted along with all of the answers
  checkAnswers: false           // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

