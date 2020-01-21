import { Component, OnInit } from '@angular/core';
import { PersistanceService } from '../services/persistance.service';
import { RouteService } from '../services/route.service';
import { Nutrients } from '../classes/food';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  filter: Array<Nutrients>;
  refresh: boolean  = false;
  displayedColumns : string[] = ["Name", "Total Amount", "Unit", "Dervied By."];

  constructor(private persistService: PersistanceService, private routerService: RouteService) { }

  ngOnInit() {
    // if(sessionStorage.getItem('username') != null)
      this.persistService.getMeal();
    // else {
    //   alert("not logged in");
    //   this.routerService.routeToLogin();
    // }
  }

  viewDetails(fdcId) {  
    this.persistService.selectedFdcId = fdcId;
    this.routerService.routeToDetailsDialog();
  }

  deleteMeal(fdcId) {
    
      this.persistService.deleteMeal(fdcId);
      this.filter = [];
      this.refresh = false;
      // location.reload();
      // this.showNutrients();
      
  }

  showNutrients() {
    this.filter = [];
    this.refresh = true;
    console.log(this.persistService.mealNutrients);
    let n = this.persistService.mealNutrients.length; //contains the combined list of nutrients  i.e 73 elements
    let flag = "not visited";
    let visited : Array<boolean> = [];
    for( var i=0;i<n;i++)
      visited[i] = false;
    let separateNutrients = this.persistService.mealNutrients; // used since persistService.mealNutrients was not accessebile inside the filter function
    let aggregateNutrients = new Nutrients();
    let filter: Array<Nutrients> = [];  //final array containg the filtered nutrients
    let sumAmount = 0.0;
    this.persistService.mealNutrients.filter(function(each) {
      sumAmount = 0.0;
      flag = "not visited";
      if(each.name == "Energy") { //since two different units of energy are given, to sum it separately
        for(var i =0;i<n; i++) {
          if( each.name == separateNutrients[i].name && each.unitName == separateNutrients[i].unitName) {
          if(visited[i] ==  false) {
              sumAmount = sumAmount + parseFloat(separateNutrients[i].amount.toString());
              visited[i] = true;
          }
          else {
            flag = "visited";
          }
        }
      }
      }
      else {
        for(var i=0;i<n;i++){
          if (each.name == separateNutrients[i].name) {
            if(visited[i] == false) {
              sumAmount = sumAmount + parseFloat(separateNutrients[i].amount.toString());
              visited[i]=true;
            }
            else {
              flag = "visited"; // to notify the nutrients value has been added before.
            }
          }        
        }
      }

      if(flag!="visited") { 
        aggregateNutrients = new Nutrients();
        aggregateNutrients.id = each.id;
        aggregateNutrients.name = each.name;
        aggregateNutrients.unitName = each.unitName;
        aggregateNutrients.amount = sumAmount.toFixed(3).toString();
        aggregateNutrients.description = each.description;
        filter.push(aggregateNutrients);  
      }   
    });
    this.filter = filter;
    // console.log(this.filter);
    }
}
