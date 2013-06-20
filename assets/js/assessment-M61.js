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

preamble: '<br><b>GPI Database, Multiple-choice Questions / Module 6</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'What is purpose of gpidatabase.com?',
     choices: ['Control activities and avoid access to non authorized users',
	      correct('Is the system we have to track and share information, monitor activity, evaluate and have statistics on propagation and potential'),
	      'It is a Catalog for Materials available',
	      'Is the system we use to send emails to each other, make calls and see news on WOPG'],
	lesson: '7.1'},

    {questionHTML: "How do you know what TV Initiatives are present in South America?", // question can be plain text or arbitrary HTML
     choices: ['Under Assessments tab do a Find and enter SAM% under Region and then click on Search to see the results', 
	      'Send email to help@gpidatabase.com asking for the report',
	      'Under Cities Profiles tab do a Find and enter SAM% under Region and then click on Search to see the results',
	      correct('Under View Projects tab do a Find and enter TV% under Project and SAM% under Region and then click on Search to see the results')],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '7.1'},

    {questionHTML: 'Where do you enter your Assessments?',
     choices: [correct('Under Assessments tab'),
	       'Under View Assessments tab',
	       'On Google Docs',
	       'Under GPI-EA Events tab'],
     lesson: '7.1'},

    {questionHTML: 'How do you know what projects/initiatives have reached more than 250.000 people?',
     choices: ['Under View Projects tab, view the details of every project, one by one, go to the Status tab and see the reached people',
	       'Under Potential tab, enter 250000 and click Update',
	       'It is impossible to get that information inside gpidatabase.com',
	       correct('Under Proj/City tab enter 250000 and click on Show')],
      lesson: '7.1'},

    {questionHTML: 'How do you know the planned GPI Events in your region?',
	choices: ['Ask Karthik by email to be sure you have the latest information',
		 correct('Under GPI-EA Events click on Find, enter your Region and then click on Search to see the results'),
		 'Under View Projects tab click on Find, enter your Region and then click on Search to see the results',
	       'Check on Google Document'],
	       lesson: '7.1'},
   ],
  assessmentName: 'a6course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

