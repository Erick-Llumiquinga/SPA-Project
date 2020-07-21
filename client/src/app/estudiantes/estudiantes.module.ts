import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent }  from './estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from "@angular/forms";   

@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EstudiantesModule { }
