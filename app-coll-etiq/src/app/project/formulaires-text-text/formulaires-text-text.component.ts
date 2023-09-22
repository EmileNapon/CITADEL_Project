
import { Component,  Output, EventEmitter  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { FormBuilder, FormGroup, Validators,FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-formulaires-text-text',
  templateUrl: './formulaires-text-text.component.html',
  styleUrls: ['./formulaires-text-text.component.css']
})
export class FormulairesTextTextComponent {
 
  dataSource = new MatTableDataSource<any>();
  formulaireModification!: FormGroup; // Ajoutez cette ligne

  donnees: any;  // Définissez un champ pour stocker les 
  myForms: FormGroup[] = [];
  valeurs: any[] = [];
  afficherTableau: boolean = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.addForm(); // Ajouter un premier formulaire
  }

  addForm() {
    const formGroup = this.formBuilder.group({
      french: ['', [Validators.required, this.validateWordCount]],
      moore: ['', [Validators.required, this.validateWordCount]],
    });
    this.myForms.push(formGroup);
    
  }
  
  validateWordCount(control: AbstractControl): ValidationErrors | null {
    const text = control.value;

    if (text === null || text === undefined) {
        return null; // Si le texte est null ou non défini, la validation est ignorée.
    }

    const wordCount = text.trim().split(/\s+/).length;

    if (wordCount > 5) {
        return { wordCountExceeded: true };
    }

    return null;
}


  submitAllForms() {
    for (const formGroup of this.myForms) {
      if (formGroup.valid) {
        const formData = formGroup.value;
        console.log(formGroup.value); // Envoyer les données à votre backend

        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
      
        this.http.post('http://127.0.0.1:8000/employe/postEmploye', formData, { headers }).subscribe(
          response => {
            console.log('Données envoyées avec succès', response);
            formGroup.reset();
          },
        );
        }
      }

    
  }

  ajouterFormulaire() {
    if (this.myForms[this.myForms.length - 1].valid) {
      this.addForm(); // Ajouter un nouveau formulaire seulement si le dernier est valide
      
     
    }
  }

  formulaireValide(index: number) {
    return this.myForms[index].valid;
  }

  validerTousLesFormulaires() {
    let allValid = true;
    for (const formGroup of this.myForms) {
      if (!formGroup.valid) {
        allValid = false;
        break;
      }
      
    }
    return allValid;
  }
  

  afficherDonnees() { 
    this.afficherTableau = true;  
    this.http.get('http://127.0.0.1:8000/employe/getEmploye').subscribe(
    (data) => {
      this.dataSource.data = data as any[];
      console.log('Données récupérées avec succès :', data);
    },
      
    );

}

  
  onCharacterClicked(char: string): void {
    const activeForm = this.myForms[this.myForms.length - 1];
    const mooreControl = activeForm.get('moore');
  
    if (mooreControl) {
      mooreControl.setValue(mooreControl.value + char);
    }
  }
  

  
  

  }
  


  
  
