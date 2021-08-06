import { Injectable } from '@angular/core';
import { Quizz } from './quizzmodel';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 quizzess:Quizz[]=[
   {
     question:'What is the capital city of Australia?',
     answer:[
       {option:'Sydney',correct:false},
       {option:'Melbourne',correct:false},
       {option:'Canberra',correct:true}
     ]
   },
   {
    question:'Which US state was Donald Trump born in?',
    answer:[
      {option:'california',correct:false},
      {option:'texas',correct:false},
      {option:'New York',correct:true}
    ]
  },
  {
    question:'If you completed the Three Peaks challenge, which three UK mountains would you have climbed?',
    answer:[
      {option:'Garnedd Ugain, Carnedd Llewelyn,Glyder Fawr',correct:false},
      {option:'Ben Nevis, Snowdon, Scafell Pike',correct:true},
      {option:'Pen Y Fan, Skiddaw, Ben macdui',correct:false}
    ]	
  
  },	
  {
    question:'Which UK city is situated further west?',
    answer:[
      {option:'Edinburgh',correct:true},
      {option:'Bristol',correct:false},
      {option:'london',correct:false}
    ]
  },
  {
    question:'How many countries are there in the region of Europe? (Recognised by the United Nations)',
    answer:[
      {option:'44',correct:true},
      {option:'50',correct:false},
      {option:'32',correct:false}
    ]
  },
  {
    question:'What is the capital of Finland?',
    answer:[
      {option:'Turku',correct:false},
      {option:'Tampere',correct:false},
      {option:'Helsinki',correct:true}
    ]
  },
  {
    question:'What is the currency of Vietnam?',
    answer:[
      {option:'Vietnamese doller',correct:false},
      {option:'Vietnamese dong',correct:true},
      {option:'Vietnamese rupees',correct:false}
    ]
  },
  {
    question:'What language is spoken in Brazil?',
    answer:[
      {option:'Portuguese',correct:true},
      {option:'English',correct:false},
      {option:'Spanish',correct:false}
    ]
  },
  {
    question:'What do the French call the English Channel?',
    answer:[
      {option:'the Narrow Sea',correct:false},
      {option:' Pas de Calais',correct:false},
      {option:'la Manche',correct:true}
    ]
  },
  {
    question:'How many permanent members are there on the UN security council?',
    answer:[
      {option:'Five: China, France, Russian Federation, United Kingdom, United States',correct:true},
      {option:'Two: United states,United Kingdom',correct:false},
      {option:'Three: Rsusian, China ,India',correct:false}
    ]
  },
 ]
  constructor() { }

  getquizzess(){
   return this.quizzess;
  }
}
