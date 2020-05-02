import { Component, OnInit } from "@angular/core";
import { Recipie } from "./recipie.model";
import { RecipieServiceService } from '../recipie-service.service';

@Component({
  selector: "app-recipies",
  templateUrl: "./recipies.page.html",
  styleUrls: ["./recipies.page.scss"],
})
export class RecipiesPage implements OnInit {
  recipies:Recipie[];
  constructor(private recipie:RecipieServiceService) {}

  ngOnInit() {

    this.recipies=this.recipie.getAllRecipies();
  }


}
