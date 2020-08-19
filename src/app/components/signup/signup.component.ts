import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  securityQuestion=[
    "India ",
     "Afghanistan ",
   "Albania",
     "Algeria",
     "Andorra",
     "Angola",
     "Antigua and Barbuda",
     "Argentina",
     "Armenia",
     "Australia",
     "Austria",
     "Bangladesh",
     "Brazil",
     "Belgium",
     "Bulgaria",
     "China",
     "England",
     "New Zealand",
     "Colombia",
     "Denmark",
     "Egypt",
     "Finland",
     "France",
     "Georgia",
    "Germany",
     "Ghana",
     "Holy See",
     "Honduras",
     "Hungary",
     "Indonesia",
     "Iran",
     "Iraq",
     "Ireland",
     "Israel",
     "Italy",
     "Japan",
     "Jordan",
     "Korea",
     "Malaysia",
     "Maldives",
     "Mali",
    "Malta",
    "Nepal",
    "Pakistan",
    "Palau",
    "Russia",
    "Singapore",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Yemen",
     "Zimbabwe",



   ]

  userAddressValidations: FormGroup;
  submitted:boolean=false;
    constructor(private formBuilder: FormBuilder,private router:Router)  {
     }

  ngOnInit(): void {
    
    this.userAddressValidations = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      surname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9@#!$%^&*]+')]],
      email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      dateOfBirth: new FormControl(new Date()),
      securityQ:['',Validators.required]
    });
  }
 
  public adding()
    {
      // function to add the user 
      this.submitted=true;
         if(this.userAddressValidations.invalid)
       {
         return;
       }
       alert("Thanks for registering")
       this.router.navigate(['/result']);
      }
}
