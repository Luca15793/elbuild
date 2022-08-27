import { Component, Input, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  selectedCategory: string = '';
  jokesArray:any = [];
  randomJoke: any;

  constructor(
    private jokeService: JokesService,
    private emitterService: EmitterService
  ) {
    this.emitterService.emitter.subscribe(cat =>{
      this.selectedCategory = cat;
      // console.log("CATEGORY RECEIVED --> ", this.selectedCategory);
      this.getJokeFromCategory(this.selectedCategory);
      this.jokesArray = [];
    });
   }

  ngOnInit(): void {
  }
  

  getJokeFromCategory(category: string){
    for(let i=0; i<4; i++){
      this.jokeService.getJokeFromCategory(category)
      .then(res=>{
        // console.log("JOKE FROM CATEGORY --> ", res);
        this.jokesArray.push(res);
      })
      .catch(err=>{
        console.error("ERROR GET JOKE FROM CATEGORY", err);
      });
    }
    
  }
  

}
