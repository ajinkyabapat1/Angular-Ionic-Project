import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipieServiceService } from "src/app/recipie-service.service";
import { Recipie } from "../recipie.model";

@Component({
  selector: "app-recipie-detail",
  templateUrl: "./recipie-detail.page.html",
  styleUrls: ["./recipie-detail.page.scss"],
})
export class RecipieDetailPage implements OnInit {
  loadedRecipie: Recipie;

  constructor(
    private activateRoute: ActivatedRoute,
    private recipie: RecipieServiceService,
    private router:Router
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      if (!param.has("id")) {
        return;
      }
      const recipieId = param.get("id");
      console.log(recipieId);
      this.loadedRecipie = this.recipie.getDetails(recipieId);
      console.log(this.loadedRecipie);
    });
  }
  deleteRecipie() {
    this.recipie.deleteRecipie(this.loadedRecipie.id);
    this.router.navigate(["/recipies"]);
  }
}
