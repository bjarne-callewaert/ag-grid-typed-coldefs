import { Component } from "@angular/core";
import { ColDef } from "@ag-grid-community/core";
import { Moment } from "moment";

interface ICar {
  make: string;
  model: string;
  price: number;
  produced: Moment | null; // TODO: comment this to get it compiled
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  columnDefs: ColDef<ICar>[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "produced" }, // TODO: comment this to get it compiled
  ];

  rowData: ICar[] = [
    {
      make: "Toyota",
      model: "Prius",
      price: 26000,
      produced: null, // TODO: comment this to get it compiled
    },
    {
      make: "Ford",
      model: "Focus",
      price: 33000,
      produced: null, // TODO: comment this to get it compiled
    },
    {
      make: "Chevy",
      model: "Bolt",
      price: 22000,
      produced: null, // TODO: comment this to get it compiled
    },
  ];
}
