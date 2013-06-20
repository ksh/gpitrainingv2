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

  preamble: '<br><b>Entrenamiento del Rep Rep Prueba Selección Múltiple / Módulo 2</b><br><br>Por favor conteste <b>todas</b> preguntas abajo<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "El objetivo de WOPG es:", // question can be plain text or arbitrary HTML
     choices: ['Que cada persona en el mundo reciba el regalo del Conocimiento y sienta Paz', 
	      correct( "Que cada persona en el mundo tenga la oportunidad de escuchar el Mensaje de Paz de Prem Rawat al menos una vez y,  si desean seguir buscando aún más, se les proporciona el mejor apoyo"), 
	      'Que Prem Rawat es mundialmente  reconocido como un experto en la Paz', 
	      'Que los eventos de Prem Rawat se realizan con la mayor calidad'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '1.2'},

    {questionHTML: 'El departamento responsable de los asistentes al evento es:',
	choices: ['El Equipo de Eventos de Maharaji (MET)',
	          'El Grupo de Servicios para Eventos (ESG)',
                  correct('El Grupo responsable del éxito y enriquecimiento de los eventos (EEG)'),
	          'Servicio de Gerencia de Voluntarios (VMS)'],
      lesson: '1.2'},

    {questionHTML: 'El Rol de GPI es:',
	choices : [correct('Apoyar a las personas en sus esfuerzos y proporcionar información precisa a Prem Rawat sobre lo que está sucediendo'),
		  'Imponer las iniciativas de paz alrededor del mundo',
		  'Asegurarse de que todo el mundo reciba el regalo del Conocimiento',
		  'Controlar la manera en que se disemina el mensaje '],
      lesson: '1.2'},

    {questionHTML: 'El sistema de invitacion funciona de la siguiente manera:',
	choices: ['Las personas inscriben su solicitud de asientos en internet o llaman para reservar su asiento',
		correct('Las personas solicitan una invitación por internet o llamando, tras lo cual se les pide si desean confirmar su asistencia'),
		  'Se les dice a las personas que están en la lista de contactos locales que vayan directamente a la sala',
		  'Las personas pagan cierta cantidad para garantizar un asiento'],
     lesson: '1.2'},

    {questionHTML: 'Cuáles son los recursos que las personas tienen para pedir ayuda? ',
	choices: ['La Línea de Información para Eventos y los Reps de GPI',
		 correct('Reps de GPI, Línea de Información y correos electrónicos'),
		 'Reps de GPI y los Ayudantes del sistema anterior',
		 'Línea de Información de GPI'],
     lesson: '1.2'},

    {questionHTML: 'Qué recurso se puede usar para recomendar material para una iniciativa? ',
	choices:[correct('El catálogo para materiales, llamando a la Línea de Información, preguntando a través de  correo-e a GPI  id o contactando un Rep de GPI'),  
		   'wopg.org, llamando a la Línea de Información de GPI, o contactando a un Rep de GPI',
		   'Las llaves, llamando a la Línea de Información de GPI,  preguntando a través de un GPI mediante correo-e id o contactando a un Rep de GPI',
		   'Grupo de Servicios del Departamento de Medios, llamando a la Línea de      Información, preguntando a través de un GPI mediante correo-e id'],
	    
     lesson: '1.2'},

    {questionHTML: 'Cuáles son los items que los Reps de GPI están supuestos a medir?',
     choices: ['Crecimiento y Apoyo Local',
               'Crecimiento y Acceso',
               'Crecimiento y Potencial ( específicamente pasión )',
               correct('Potencial (específicamente pasión) y Apoyo Local')],
     lesson: '1.2'},

    {questionHTML: 'Si GPI encuentra que una iniciativa que se esté llevando a cabo en una comunidad no es realmente efectiva, debería:',
     choices: ['Decirle a la comunidad que no continúe',
	      'Decirle a la persona responsable de la iniciativa que no continúe',
	      'Preguntarle  a la comunidad para que cambie a las personas encargadas de la iniciativa',
	      correct('Averiguar las razones por las que la iniciativa no es efectiva, buscar maneras de mejorarla y sugerirlas  a la comunidad  o equipo que participa en la iniciativa')],
     lesson: '1.2'},

     {questionHTML: 'La pasión puede definirse como: ',
      choices: ['Cuantas personas están involucradas en la propagación del mensaje',
	       'Por cuanto esté creciendo del lugar',
	       correct('El entusiasmo del individuo, cómo aplican el entusiasmo y el resultado de sus esfuerzos'),
	       'La cantidad de dinero gastada por los individuos y el resultado de sus esfuerzos'],
     lesson: '1.2'},

     {questionHTML: 'Si tú (como miembro de GPI) te enteras de que existe algún desacuerdo o inconveniente en otro departamento (especialmente durante el tiempo en que se está llevando a cabo un evento) deberías:',
      choices: ['No hacer nada, pues hacer algo podría ocasionar un solapamiento o falta de cooperación',
		'Tratas de ayudar a resolver el problema, ya que tenemos que trabajar en equipo',
		correct('No hacer nada, pero informas a la gerencia de GPI  y al otro departamento para que ellos  lo retomen con el departamento respectivo (si se considera adecuado)'),
		'Tratas de ayudar a resolver el problema e informar tanto a la gerencia de GPI como al otro departamento para que este inconveniente sea evitado en el futuro.'],
     lesson: '1.2'}
   ],

  assessmentName: 'a2course', // unique name submitted along with all of the answers
  checkAnswers: false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

