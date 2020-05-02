import { Injectable } from '@angular/core';
import { Recipie } from './recipies/recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipieServiceService {

  constructor() { }
  recipies: Recipie[] = [
    {
      id: "R1",
      title: "Paneer Butter Masala",
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

  getAllRecipies(){
    return this.recipies;
  }

  getDetails(id:string){
   return {...this.recipies.find(recipie=>{
     return  recipie.id==id;
    })
  }}

  deleteRecipie(id:string){
 this.recipies=this.recipies.filter(recipie=>{
  return recipie.id !=id;
})
  }
}
