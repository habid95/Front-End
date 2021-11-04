import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../app/models/usuario';


@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {

  
  usuario: Usuario={
    username :"",
    contrasena:""
  };

  constructor(private route:Router,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }
  message:string = '';

  
  

  verificar(form: any){
    // console.log(this.usuario)
    this.usuarioService.buscarUsurio(this.usuario).subscribe(
      res=>{
        let ress = res
        // console.log('res ' +ress);
        // console.log(ress)
        if(ress  !== 'undefined' && ress ===null){
          // console.log('entro undefinad')
          alert("Datos invalidos");
        }else{
          this.stored(this.usuario);
          this.route.navigate(['/inicio']);
          // console.log('loguin correcto')

        }
      },
      err=>{
        console.log(err);
      }
    );
  }

  stored(usuario:Usuario){

      localStorage.setItem("persona" , JSON.stringify(usuario));
  }


}
