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


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see 
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page

preamble: '<br><b>Promoción de los Eventos con Prem Rawat / Módulo 10</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
		{questionHTML: 'Cuál de las siguientes afirmaciones es cierta:',
	      choices : ['A. La organización local es la que define los criterios para la obtención de una invitación para el evento y le pasa la información a WOPG',
			'B. WOPG define los criterios de asistencia a los eventos con Prem Rawat, dependiendo de lo que sea mejor para esa zona',
			'C. Las personas de la zona siempre tiene prioridad',
			correct('D. B y C')],
	lesson: '11.2'},

		{questionHTML: 'Cuál de las siguientes afirmaciones no es cierta:',
		choices: ['No es posible utilizar el sistema de invitación en línea para solicitar entradas para más de una persona',
			correct('No es posible solicitar entradas para más de una persona'),
			'Puedo utilizar el teléfono de información del evento para solicitar cierto número de entradas y así invitar a mi familia',
			'Me puedo sentar con mis amigos en el evento si solicito los asientos juntos en el lobby/zona de entrada del evento'],
	lesson: '11.2'},

 		{questionHTML: 'Cuál de las siguientes afirmaciones es cierta:',
		 choices: ['No es posible que te sientes con tu familia ya que solo se proporciona una invitación por email',
			 correct('Si quieres sentarte con tu familia en el evento, debes recoger los asientos en el lobby/zona de entrada del evento'),
			 'Si quieres sentarte con tu familia debes buscar el botón de familia dentro del sistema en línea',
			 'Los Representantes de GPI tiene algunas invitaciones para aquellos que quieres sentarse con su familia'],
	lesson: '11.2'},

 		{questionHTML: 'Cuál de las siguientes afirmaciones es cierta:',
		 choices: ['Tienes que tener una cuenta de correo electrónico para poder solicitar una entrada para un evento con Prem Rawat',
			 correct('Si no tienes email, puedes llamar al teléfono de información del evento y pedir una invitación'),
			 'Si no tienes email, puedes llamar al teléfono de información del evento y pedir una invitación solo para ti',
			 'No es posible solicitar una invitación si no tienes cuenta de correo electrónico o teléfono.'],
	lesson: '11.2'},
		
		{questionHTML: 'Cuál de las siguientes afirmaciones no es cierta. Los Representantes de GPI pueden ayudar con el sistema de invitación',
		 choices: ['Sabiendo el teléfono de información del evento y proporcionárselo a aquellos que lo necesiten',
			 'Poniéndose en contacto con EEG (Event Experience Group o Grupo de Eventos) si hubiera un gran número de personas dentro de la comunidad en cuestión que necesite ayuda y consensuando una solución con EEG',
			 correct('Acordando con EEG que le proporcionen un número determinado de entradas que se usen cuando sea absolutamente necesario'),
			 'Solicitar una invitación para una persona que necesite ayuda'],
	lesson: '11.2'},

			
	      
  ],
  assessmentName: 'a10course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

