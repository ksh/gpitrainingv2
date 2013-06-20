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


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see 
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page

preamble: '<br><b>Estimating Event Audiences, Multiple-choice Questions / Module 7</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'A location in your region is being considered. People who know about this are really excited. To get an estimate, you ring up your local contacts and Reps. They give you a number. When you ask for the rationale, which of their responses is acceptable to you?',
     choices: ['Is what we think we can get. We are confident of getting this number. Is based on how much excitement is there.',
	      correct('Is what we think we can get. Is based on our estimate on how many from TV might come (either based on how many came last time, or how many we know are watching), and the guests we would be bringing (based on our promotion plan and how many the community says it would bring). If we don\'t know how many are watching on TV, but we know that viewership is high, we can give a conservative estimate.'),
	      'Is what we think we can get. It is based on how many will come from TV - we don\'t know how many are watching or would respond. The number of local guests are also based on the level of excitement that is there. ',
	      'Is just my number. I have done this many years and am confident of my estimate.'],
	lesson: '9.1'},

    {questionHTML: "Giving information about all the possible bad days to have an event is important. Even if we think we know when M might be coming. True or false?", // question can be plain text or arbitrary HTML
     choices: [correct('True. M can choose to come during any time of the year. If he chooses to come, and we don\'t have the right days listed, we are responsible for the wasted effort of M and all the different people who made the event possible.'), 
	      'False. This information is needed only for the season M usually comes in. Too much information is not good.',
	      'True. But we only need to provide the list of bad days excluding seasons, which is taken care of by other teams.',
	      'None of the above.'],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '9.1'},

    {questionHTML: 'How do we start estimating audience size?',
     choices: ['We start with the worst day to have an event, whatever day of the week it may be.',
	       'We start with a weekend to have the event',
	       'We start with a weekday to have the event',
	      correct('We start with the best day to have an event, whatever day of the week it may be.')],
     lesson: '9.1'},

    {questionHTML: 'How do we propose ideal start times for an event?',
     choices: ['Based on the most convenient time for people with Knowledge, by each day of the week.',
	       correct('Based on what is convenient for all attendees in general, by each day of the week.'),
	       'Based on what is convenient for M',
	       'Based on what is convenient for people watching on TV, by each day of the week.'],
     lesson: '9.1'},

    {questionHTML: 'What will you do if you find that the estimate was wrong?',
     choices: ['Nothing - we had a wonderful event with M',
		'We will find out why, if the attendance was low - and record it for future purposes.',
	       correct('We will find out why and record it for future purposes.'),
		'We will find out why, if the attendance was low. If our estimate was low and too many people came, and as a result there was an overflow, it is great - even M likes an overflow.'],
      lesson: '9.1'},

   ],
  assessmentName: 'a7course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

