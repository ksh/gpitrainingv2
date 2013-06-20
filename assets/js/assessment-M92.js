﻿// Copyright 2012 Google Inc. All Rights Reserved.
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
  preamble: '<b>Módulo 9 - Evaluación de la Comunidad. Después de contestar todas las preguntas, debes dar click en el botón \'Submit Answers\'</b><br><br>',


  questionsList: [

  {questionHTML: ' Ciudad con 10 pcc activas. Comenzó radio y TV. Al mes se les presenta el mensaje a 50 personas. Unas 400 interesados vendrían a un evento con Prem Rawat.<br>Qué puntuación de potencial le darías a esta ciudad?</b><br>',
        choices : ['6',
	        '7',
	       correct('8'),
	       correct('9'),
	      '10'],
     lesson: '9.2'},

  {questionHTML: 'Ciudad con 180-200 pcc activas. Se incrementó el interés por las iniciativas de GPI. Al mes se les presenta el mensaje a 25-30 personas. Entre 400 y 500 interesados vendrían a un evento con Prem Rawat.<br>Qué puntuación de potencial le darías a esta ciudad?</b><br>',
     choices : ['6',
	       correct('7'),
	       correct('8'),
	       '9',
	      '10'],
     lesson: '9.2'}, 	  

	  
	  {questionHTML:  'En una ciudad de tamaño medio, hay una comunidad de 50 pcc. 10 están dedicados con pasión a la difusión. Están haciendo un evento cada fin de semana, en el que 1 persona nueva asiste cada vez.<br>Qué puntuación de potencial le darías a esta ciudad?</b><br><br>',
    choices : [correct('3'),
	       correct('4'),
	      '5',
	      '6',
	      '7'],
    lesson: '9.2'},

  {questionHTML:  'En una ciudad pequeña, hay una comunidad de 400 pcc, de los que 5 están dedicados con pasión a la difusión. Están llevando a cabo dos iniciativas diferentes cada semana y aparte están involucrados en la TV con una estimación de 1.000 personas por mes que ven WOPG TV. Entre 5000 y 6000 interesados vendrían a un evento con Prem Rawat<br>Qué puntuación de potencial le darías a esta ciudad?</b><br><br>',
    choices : ['3 or 4',
	      '5 or 6',
	      '7 or 8',
	      correct('9 or 10')],
    lesson: '9.2'},


  {questionHTML:  'En una pequeña ciudad, hay una comunidad de 30 pcc. No ocurre propagación. Hacen eventos locales para mantenerse inspirados los pcc.<br>Qué puntuación de potencial le darías a esta ciudad?</b><br><br>',
    choices : [correct('1'),
	      correct('2'),
	      '3',
	      '4',
	      '5'],
    lesson: '9.2'},

],
  assessmentName: 'a9course', // unique name submitted along with all of the answers
  checkAnswers: false           // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

