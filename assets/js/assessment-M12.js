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

preamble: '<br><b>Despliegue del Mensaje, Cuestiones Selección Múltiple / Módulo 1</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Deberíamos enfocar nuestra atención en:", // question can be plain text or arbitrary HTML
     choices: ['Desarrollar un plan para ayudar a un mayor número de personas para que reciban el Conocimiento', 
	      correct('Ayudar a que el mensaje llegue a todas partes y de manera innovadora'),
	      'Dejar que las personas conozcan el mensaje y ayudarles para que sepan cómo recibir el Conocimiento', 
	      '1 & 2'], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.2'},

    {questionHTML: 'Pavimentando el camino significa:',
     choices: ["Crear un camino suave y disfrutable para que las personas puedan recibir el Conocimiento",
               correct('Para que las personas escuchen el mensaje, hacer las cosas sencillas y Disfrutables'),
	       'Crear una manera disfrutable para que las personas se puedan presentar y que puedan recibir el Conocimiento',
               '2 & 3'],
	lesson: '3.2'},

    {questionHTML: 'Sin agendas escondidas significa:',
     choices: ['Que las personas harán la conexión por sí mismas, de manera particular',
		'Que nuestro trabajo consiste en conseguir que el mensaje esté disponible',
	        'Que no se puede hacer que la propagación suceda - conseguimos que el mensaje esté disponible y dejamos que las personas continúen su propio viaje',
	       correct('Son válidas todas las respuestas')],
      lesson: '3.2'},

    {questionHTML: 'De estas oraciones, cuál es incorrecta:',
     choices: ['Necesitamos un sistema para llevar el mensaje sin ganchos ni agenda',
	       'Dejar que las personas vean y escuchen por su propia cuenta - solo conseguir que el mensaje esté disponible',
	       correct('Los Representantes de GPI compartirán su claridad, animarán a las personas de las comunidades a escuchar el mensaje e inspirarán a las personas para que practiquen el Conocimiento'),
	      'Es mejor cuando las personas hacen las conexiones por sí mismas'],
     lesson: '3.2'},
   ],

  assessmentName: 'a1course', // unique name submitted along with all of the answers
  checkAnswers: false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

