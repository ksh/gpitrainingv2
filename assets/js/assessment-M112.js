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

preamble: '<br><b>Evaluación y Coaching, Cuestiones Selección Múltiple / Módulo 11</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [

    {questionHTML: '¿Cuál és el propósito de Evaluación y Coaching?',
     choices: ['Ayudar a los GPI Reps a planificar sus visitas a las comunidades',
	      correct('Darle apoyo al Rep de GPI, haciendo un seguimiento de su trabajo con las comunidades, además de ayudar a los Reps a hacer mejor su trabajo y a que lo disfruten más.'),
	      'Ayudar el GPI Rep en su esfuerzo de aumentar en nivel de propagación en las comunidades'],
	lesson: '8.2'},

      {questionHTML: "¿Cuándo debe de asistir a una evaluación por homólogos el Representante de GPI?", // question can be plain text or arbitrary HTML
     choices: ['Cuando un Asesor Regional lo invite', 
	      'Tras visitar una comunidad',
	      'Una vez cada dos meses para presentar una visita a la comunidad',
	      'Al menos una vez al mes',
               correct('Al menos una vez al mes y una vez cada dos meses para presentar una visita a la comunidad')],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '8.2'},


    {questionHTML: '¿Por qué es el Coaching una herramienta importante para asegurar el éxito continuado?',
     choices: ['A) Para ayudar en mi proceso de evaluación y feedback y para proporcionarme apoyo cuando me tope con limitaciones.',
	       'B) Para proporcionarme un proceso continuo de orientación respecto al rendimiento como Rep de GPI y para crear planes de acción específicos para mejorar el impacto en la comunidad.',
	      correct('A y B')],
     lesson: '8.2'},


    {questionHTML: '¿Qué le aporta al Rep de GPI hacer el informe de evaluación Comenzar, Cesar y Continuar?',
     choices: [correct('A) Hace un seguimiento de sus sentimientos/emociones y le permite ser proactivo respecto a su papel como Rep de GPI.'),
		'B) Le permite al Rep calcular los parámetros de la comunidad',
	       'A y B'],
      lesson: '8.2'},

    {questionHTML: '¿Cuándo debe mantener el Rep una conversación formativa o Coaching con el Coach?',
     choices: ['La conversación formativa sólo es necesaria cuando el Rep así lo siente',
	       correct('El Coaching o conversación formativa tiene lugar al menos una vez al mes, preferiblemente después de que el Rep haya visitado una comunidad y se haya hecho una evaluación de su rendimiento. la conversación formativa o coaching puede solicitarla el Reo cuando lo crea necesario.'),
	       'Solo cuando existe un problema'],
	       lesson: '8.2'},
   ],
  assessmentName: 'a11course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

