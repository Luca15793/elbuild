import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { EmitterService } from 'src/app/services/emitter.service';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: string[] = [];
  selectedCategory: string = '';
  randomJoke: any;

  constructor(
    private categoriesService: CategoriesService,
    private jokeService: JokesService,
    private emitterService: EmitterService,
  ) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .then(res=>{
        // console.log("CATEGORIE ", res);
        this.categories = res;
        this.selectedCategory = this.categories[0];
        this.emitterService.emitter.emit(this.selectedCategory);
      })
      .catch(err=>{
        console.error("ERROR GETDATA", err);
      })
  }

  clickOnButtonCategory(category: string){
    // console.log("SELECTED CATEGORY ", category);
    this.emitterService.emitter.emit(category);
  }


  getRandomJoke(){
    this.jokeService.getRandomJoke()
      .then(res=>{
        // console.log("RANDOM JOKE ", res);
        this.randomJoke = res;
      })
      .catch(err=>{
        console.error("ERROR GET RANDOM JOKES", err);
      });
  }

}
