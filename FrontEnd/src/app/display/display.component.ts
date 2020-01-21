import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food, Nutrients } from '../classes/food';
import { PersistanceService } from '../services/persistance.service';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  foodDetails: Food ;
  displayedColumns : string[] = ["Name", "Amount", "Unit", "Dervied By."];
  datasource: Array<Nutrients>;
  favoriteClicked: boolean = false;
  mealClicked: boolean = false;
  public navbarCollapsed = true;

  constructor(private persistService: PersistanceService, private authService: AuthenticationService, private routerService: RouteService) { 
    this.foodDetails = null;
    this.favoriteClicked = false;
    this.mealClicked = false;
  }

  ngOnInit() {
    if(this.persistService.selectedFood ==  null)
      alert("No food selected");
    else {
      this.foodDetails = this.persistService.selectedFood;
      this.datasource = this.foodDetails.foodNutrients;
    }
  }


  saveFavorite() {
    
    // if(sessionStorage.getItem('username') != null) {
    //   console.log(sessionStorage.getItem('username'));
    //   console.log(fdcId);
      this.persistService.saveFavorite(this.foodDetails);
      this.favoriteClicked = true;  
      // this.routerService.routeToSearch();
    // }
    // else  {
    // alert("not logged");
    //   this.routerService.routeToLogin();
    // }
  }

  saveMeal() {
    
    // if(sessionStorage.getItem('username') != null) {
    //   console.log(sessionStorage.getItem('username'));
    //   console.log(fdcId);
      this.persistService.saveMeal(this.foodDetails);  
      this.mealClicked = true;
      // this.routerService.routeToSearch();
    // }
    // else  {
    // alert("not logged");
    //   this.routerService.routeToLogin();
    // }
  }

}
