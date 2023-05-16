import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent  {
  reservaForm: FormGroup


  titulo = 'NUEVA RESERVA';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _reservaService: ReservaService,
    private aRouter: ActivatedRoute) { 
      this.reservaForm = this.fb.group({
      restaurante: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      cantidad: ['', Validators.required],
      estado: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  
    agregarReserva() {

      const RESERVA: Reserva = {
        _id: this.reservaForm.get('_id')?.value,
        restaurante: this.reservaForm.get('restaurante')?.value,
        fecha: this.reservaForm.get('fecha')?.value,
        hora: this.reservaForm.get('hora')?.value,
        cantidad: this.reservaForm.get('cantidad')?.value,
        estado: this.reservaForm.get('estado')?.value
      }
  
      if(this.id == null){
        console.log(RESERVA);
        this._reservaService.guardarReserva(RESERVA).subscribe(data => {
        this.toastr.success('Se registro con exito!', 'Reserva Registrado!');
        this.router.navigate(['']);
        }, error => {
        console.log(error);
        this.reservaForm.reset();
      })
      }
    }

}
