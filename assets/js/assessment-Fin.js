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



  preamble: '<br><b>Thank you for completing the training. </b><br><br>We present you with a series of statements. Please tell us whether you agree or disagree with each one of them and how strongly.<br>Do not worry if your answer does not fit exactly one of the options presented, just click on the answer that is closest to how you feel.<br><br> ', 


  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "I learned a lot and cleared my doubts about the GPI Rep role", // question can be plain text or arbitrary HTML
     choices: ['Strongly agree',
	       'Partially agree',
	       'Neutral',
	       'Partially disagree',
	       'Strongly disagree'],
    },

    {questionHTML: 'Content presented on the course was of a very high quality',	  
     choices: ['Strongly agree',
	       'Partially agree',
	       'Neutral',
	       'Partially disagree',
	       'Strongly disagree'],
    },

    {questionHTML: 'The online format is an excellent way to do the training',
     choices: ['Strongly agree',
	       'Partially agree',
	       'Neutral',
	       'Partially disagree',
	       'Strongly disagree'],
    },

        {questionHTML: 'It was easy for me to access the platform and do the training at my own pace',
     choices: ['Strongly agree',
	       'Partially agree',
	       'Neutral',
	       'Partially disagree',
	       'Strongly disagree'],
    },

    {questionHTML: 'Please write one or two things you liked about the training:',
     correctAnswerRegex: /""/, 
    },

    {questionHTML: 'Please write one or two things that could be improved for the next group of people who will take the training',
     correctAnswerRegex: /""/, 
    },

    {questionHTML: 'Any other comments',
     correctAnswerRegex: /""/, 
    },
  ],

  assessmentName: 'postcourse', // unique name submitted along with all of the answers
  checkAnswers: false     // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

