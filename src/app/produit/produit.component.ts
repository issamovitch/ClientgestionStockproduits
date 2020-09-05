import {Component, OnInit} from '@angular/core';
import {Produit} from "./produit.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "./produit.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Observable<Produit>;
  produitForm: FormGroup;
  operation: String = "add";
  selectedProduit: Produit = null;

  constructor(private produitService: ProduitService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.produitForm = this.fb.group({
      ref: ['Product', Validators.required],
      quantite: 100,
      prixUnitaire: 5
    });
  }

  ngOnInit(): void {
    this.initProduit();
    this.produits = this.activatedRoute.snapshot.data.produits;
  }

  loadProduit() {
    this.produitService.getAll().subscribe(
      data => {
        this.produits = data
      },
      error => {
        console.log("Error ! ")
      },
      () => {
        console.log("Loading Produits ...........");
      }
    );
  }

  addProduit() {
    const p = this.produitForm.value;
    this.produitService.add(p).subscribe(
      res => {
        this.loadProduit();
        this.initProduit();
      }
    );
  }

  updateProduit() {
    this.produitService.update(this.selectedProduit).subscribe(
      res => {
        this.loadProduit()
      }
    );
  }

  deleteProduit(id) {
    this.produitService.delete(id).subscribe(
      res => {
        this.initProduit();
        this.loadProduit();
      }
    );
  }

  initProduit() {
    this.selectedProduit = new Produit();
    this.produitForm.reset();
  }
}
