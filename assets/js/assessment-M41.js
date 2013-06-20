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

  preamble: '<br><b>VMS Briefing, Multiple-choice Questions / Module 4</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "What is the main objective of Volunteer Management Services?", // question can be plain text or arbitrary HTML
     choices: ['Inspire people to volunteer in WOPG', 
               'Manage volunteers in such a way that it saves money for the organization and these resources can be diverted to other more important projects',
		correct('Create an environment where people can enjoy volunteer opportunities'),
	      'Exploit volunteer labor to get the job done as efficiently and cost effective as possible'], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.1'},

    {questionHTML: 'What are the three different types of Plug-in Opportunities?',
     choices: ['Real; Fake; Donating',
               correct('Support; Virtual; Physical'),
	       'Event; Non-Event; Giving',
               'WOPG Official; WOPG Non-official; TPRF'],
	lesson: '3.1'},

    {questionHTML: 'How do I create a Volunteer Profile if I don\'t have an email?',
     choices: [correct('See the VMS Rep (if in attendance) or GPI Rep after the presentation to fill in a Manual Plug-in Form.  These details will be sent to the VMS Data Entry Team for completion'),
	       'Ring the GPI Line in your country and demand they help you create a profile',
	       'Have a friend create a \'dummy\' email for me and use that to create an online volunteer profile',
	      'Use my friend\'s email to create a Volunteer Profile in my name'],
     lesson: '3.1'},


    {questionHTML: 'What are the 5 filters available to help in a volunteer\'s search for Latest Opportunities?',
     choices: ['Global live event/non-event; country; city; keyword; area',
		'Region; Type of Opportunity; Event/non-event; city; area',
	        'Type of Opportunity; area; region; keyword; city',
	       correct('Keyword; Global live event/non-event; Type of Opportunity; Country; Area')],
      lesson: '3.1'},

    {questionHTML: 'The purpose of managers evaluating volunteer performance and keeping it on the volunteer\'s profile is to ensure:',
     choices: ['volunteers are humiliated and punished when they do an inadequate job',
		'create more bureaucracy that no one uses',
	       correct('allows VMS to place better qualified volunteers in roles'),
	       'ensures volunteers weaknesses are identified and they can be sent to coaching'],
	       lesson: '3.1'},
   ],
  assessmentName: 'a4course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

