import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersistanceService } from '../services/persistance.service';
import { MatchFood } from '../classes/matchFood';
import { FoodDataCentralService } from '../services/food-data-central.service';
import { RouteService } from '../services/route.service';
import { Nutrients, Food } from '../classes/food';

@Component({
  selector: 'app-brand-recommendation',
  templateUrl: './brand-recommendation.component.html',
  styleUrls: ['./brand-recommendation.component.css']
})
export class BrandRecommendationComponent implements OnInit {

  selectedBrand: String;
  FoodList: Array<MatchFood>
  totalPages: number
  EachFood: MatchFood

  food: Food = new Food();
  nutrients: Nutrients;

  constructor(private activatedRoute: ActivatedRoute, private persistService: PersistanceService, 
    private fetchService: FoodDataCentralService, private routerService:RouteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.selectedBrand = params['brand'];
    })

    // this.persistService.generalSearch = this.generalSearch;
    this.persistService.brandRecommendation = [];
    this.fetchService.fetchTotalMatch("",this.selectedBrand,"",false,"","").subscribe(data => {
      this.totalPages = data.totalPages;
      if(this.totalPages>2)
        this.totalPages = 2;
      for(var i =1;i<=this.totalPages;i++) {
        this.fetchService.fetchMatchFoodPageWise("",this.selectedBrand,"",i,false,"","").subscribe(data => {
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
            this.persistService.brandRecommendation.push(this.EachFood);
          });
          // console.log(this.persistService.brandRecommendation);
          //  = this.FoodList;
        }, err => {
          console.log(err.message);
        });
      }
    },err => {});
  }

  fetchNutrients(fdcId) {
    this.fetchService.fetchFood(fdcId).subscribe(data => {
      // console.log(data.foo)
      this.food.fdcId = data.fdcId;
      this.food.description = data.description;
      this.food.dataType = data.dataType;
      this.food.brandOwner = data.brandOwner;
      this.food.brandedFoodCategory = data.brandedFoodCategory;
      this.food.ingredients = data.ingredients;
      this.food.publicationDate = data.publicationDate;
      this.food.scientificName = data.scientificName;
      this.food.foodNutrients = [];
      data.foodNutrients.forEach(element => {
        // console.log
        this.nutrients = new Nutrients();
        this.nutrients.id = element.nutrient.id;
        this.nutrients.name = element.nutrient.name;
        this.nutrients.unitName = element.nutrient.unitName;
        this.nutrients.amount = element.amount;
        if(element.foodNutrientDerivation)
          this.nutrients.description = element.foodNutrientDerivation.description;
        else
          this.nutrients.description = "";
        this.food.foodNutrients.push(this.nutrients);
      });
      // this.food.foodNutrients = this.nutrientList;
      this.persistService.selectedFood = this.food;
      console.log(this.food); 
      this.routerService.routeToDisplay();
    },err => {
      console.log(err);
    });
  }
}
