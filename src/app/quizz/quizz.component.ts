import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quizz } from '../quizzmodel';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
quizzes: Quizz[]=[];
currentquiz=0;
answerselected:boolean=false;
correctanswer=0;
incorrectanswer=0;
result=false;
randomize:number;
constructor(private quizservice:QuizService) { }

ngOnInit():void {
   this.quizzes=this.quizservice.getquizzess();

   this.randomize=Math.floor(Math.random()*this.quizzes.length);
 }

 onAnswer(option:any){
  this.answerselected=true;
 setTimeout(() =>{
  this.randomize=Math.floor(Math.random()*this.quizzes.length);
  this.currentquiz++;
  this.answerselected=false;
 },1000);

 if (option) {
  this.correctanswer++;
}
else{
  this.incorrectanswer++;
}
 }
 showresult(){
   this.result=true;
 }
}
