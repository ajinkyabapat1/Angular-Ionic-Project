import { Component, OnInit } from "@angular/core";
import { Recipie } from "./recipie.model";

@Component({
  selector: "app-recipies",
  templateUrl: "./recipies.page.html",
  styleUrls: ["./recipies.page.scss"],
})
export class RecipiesPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  recipies: Recipie[] = [
    {
      id: "R1",
      title: "Paneer Butter Masal",
      imageUrl: "assets/paneer.jpg",
      ingrediants: ["Paneer", "Butter"],
    },
    {
      id: "R2",
      title: "Gulab Jamun",
      imageUrl: "assets/jamun.jpg",
      ingrediants: ["Khava", "Ghee"],
    },

    {
      id: "R3",
      title: "Biryani",
      imageUrl: "assets/biryani.jpg",
      ingrediants: ["Rice", "Biryani Masala", "Paneer"],
    },
  ];
}
