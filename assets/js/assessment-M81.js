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

preamble: '<br><b>Promoting Events with Prem Rawat / Module 8</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Which of the following statements is true?',
     choices: ['PAD (Promotions Advertising and Distribution) is responsible for the promotion of  events with Prem Rawat.',
	      correct('The whole GPI team is responsible for the promotion of Events with Prem Rawat to those who are interested and gets professional help from PAD to be successful'),
	      'PR & PAD have joint responsibility for the promotion of events with Prem Rawat but liaise with GPI when necessary and appropriate ',
	      'The local community hosting the event is fully responsible for the promotion of the event to those who are interested in their area'],
	lesson: '10.1'},

    {questionHTML: "Promotion is", // question can be plain text or arbitrary HTML
     choices: ['A. Making sure that the entire population of the area knows Maharaji is coming to speak at an event',
	       correct('B. Making sure that the people who are interested in the message can be informed that Prem Rawat will visit their community.'), 
	      'C. Spending the largest amount of money we can on advertising the event so the largest number of people can come.',
	      'D. A & B.'],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '10.1'},

    {questionHTML: 'Which of the following statements is true?',
     choices: ['A. The global GPI team will create the materials for local GPI teams to promote the events with Prem Rawat.',
	       'B. PAD, supported by MSG - Media Service Group -  will supply the necessary materials so that GPI can promote the events eg spots for TV, Radio & materials for the press',
	       'C. PAD will provide posters and invitations to help GPI promote the event',
	      correct('D. B and C')],
     lesson: '10.1'},

    {questionHTML: 'Which of the following statements is true?',
     choices: ['Giving out handouts has proven to be a very effective and low cost promotional tool and is being encouraged as one of the main promotional activities for local communities.',
	      'Communities are being advised not to get aspirants involved in promotional activities',
	       'Using social networks can be counterproductive in PR terms and therefore should be avoided when promoting an event with Prem Rawat',
	      correct('All the above are untrue.')],
     lesson: '10.1'},

    {questionHTML: 'Which of the following is true?',
     choices: ['When using TV to promote the event we focus on the stations that are showing Words of Peace programmes',
		'We can customise the 30 second "spots" made by MSG with local information and air them before and after the local broadcast. We can also run them at other times on this station.',
		'If we want to promote the event on other channels we need to use a different promotional "spot"',
	       correct('All the above are true')],
      lesson: '10.1'},

    {questionHTML: 'Which statement is true?',
     choices: ['Leaflets / handouts should never be used in the promotion of Prem Rawat\'s events',
	      correct('Leaflets / handouts can be used as long as people have the choice to pick them up or not. People should not stand and give them out to people'),
	      'It all depends on the quality of the leaflets as to whether it is ok to physically hand them out to people or not',
	      'It all depends on the cost of the leaflets. It is ok to hand out low cost leaflets to keep the budget down.'], 
      lesson: '10.1'},

    {questionHTML: 'Which statement is true?',
     choices: [ 'It is advised to have a representative of the PR team on the regional promotions team to facilitate / advise on contact with the media/ press',
  	        'The PR team should be involved if the community has, for example, opportunities for  interviews with a local newspaper or if a local radio station wants to arrange interview',
                'The PR team do not need to be involved in every single promotional activity ',
	        correct('All the above statements are true')],
      lesson: '10.1'},		
   ],
  assessmentName: 'a8course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

