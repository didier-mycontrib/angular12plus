import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dyn-form',
  templateUrl: './my-dyn-form.component.html',
  styleUrls: ['./my-dyn-form.component.scss']
})
export class MyDynFormComponent {
  // with ReactiveFormsModule in ...module.ts

  message="";

  myFormModel = {
    firstName: {
      type: "text",
      label: "fistName",
      value: "jean",
      rules: {
        required: true,
      }
    },
    lastName: {
      type: "text",
      value: "Bon",
      label: "lastName",
      rules: {
        required: true,
        pattern : "^[a-zA-Z].+"
      }
    },
    email: {
      type: "text",
      value: "jean.Bon@iciOula.com",
      label: "email",
      rules: {
        required : true,
        email : true
      }
    },
    address: {
      type: "text",
      value: "12 rue Elle 75001 Paris ci",
      label: "address",
      rules: {
        required: true,
        minlength : 4
      }
    },
    age: {
      type: "number",
      value: 30,
      label: "age",
      rules: {
        required: true,
        min:0,
        max:150
      }
    },
    birthDay: {
      type: "date",
      value: "2023-03-01",
      label: "birthday",
      rules: {
        required: true
      }
    },
    situation: {
      label: "situation",
      value: "inconnue",
      type: "radio",
      options: [
        { label: "indeterminé", value: "inconnue" },
        { label: "celibataire" },
        { label: "en_couple" }
      ],
    },
    avecEnfant: {
      label: "avecEnfant(s)",
      value: false,
      type: "checkbox",
    },
    cheveux: {
      label: "cheveux",
      value: "inconnu",
      type: "select",
      options: [
        { label: "indeterminé", value: "inconnu" },
        { label: "rase" },
        { label: "court" },
        { label: "long" }
      ],
    },
  };

  onSubmitValues(event : {values : object}){
    this.message=JSON.stringify(event.values);
  }

}
