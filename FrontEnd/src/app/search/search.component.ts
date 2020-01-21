import { Component, OnInit } from '@angular/core';
import { MatchFood } from '../classes/matchFood';
import { FoodDataCentralService } from '../services/food-data-central.service';
import { PersistanceService } from '../services/persistance.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  generalSearch : String = "";
  FoodList: Array<MatchFood>
  totalPages: number
  EachFood: MatchFood
  quotes:Array<String> = ["There is no PERFECT diet for everyone", "Be Smart Eat Smart", "You don't have it eat LESS, You just have to eat RIGHT",
              "A healthy Outside starts from the Inside", "Skip The Diet, Just Eat Healthy", "Eat right, Bite by Bite!"]
  quote:String;

  constructor(private fetchService: FoodDataCentralService, private persistService: PersistanceService, private routerService: RouteService) { }

  ngOnInit() {
    this.quote = this.quotes[Math.floor(Math.random()*6)+0];
    console.log(this.quote);
  }

  fetch() {
    console.log(this.generalSearch);
    this.persistService.generalSearch = this.generalSearch;
    this.persistService.searchResult = [];
    this.fetchService.fetchTotalMatch(this.generalSearch,"","",false,"","").subscribe(data => {
      this.totalPages = data.totalPages;
      if(this.totalPages>2)
        this.totalPages = 2;
      for(var i =1;i<=this.totalPages;i++) {
        this.fetchService.fetchMatchFoodPageWise(this.generalSearch,"","",i,false,"","").subscribe(data => {
          data.foods.forEach(element => {
            this.EachFood = new MatchFood;
            this.EachFood.fdcId = element.fdcId;
            this.EachFood.description = element.description;
            this.EachFood.additionalDescription = element.additionalDescription;
            this.EachFood.dataType = element.dataType;
            this.EachFood.publishedDate = element.publishedDate;
            this.EachFood.allHighlightFields = element.allHighlightFields;
            this.EachFood.brandOwner = element.brandOwner;
            this.EachFood.ingredients = element.ingredients;
            this.persistService.searchResult.push(this.EachFood);
          });
          //  = this.FoodList;
          this.routerService.routeToSearch();
        }, err => {
          console.log(err.message);
        });
      }
    },err => {});
    
  }
}
  
