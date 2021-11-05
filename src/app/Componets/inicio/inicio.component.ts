import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario'
import {Router} from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  
  ListarUsuario: Usuario[] | undefined;

  constructor(private usuarioService:UsuarioService,private route:Router) { }

  usuario: Usuario={
    id:1,
    username :"",
    correo:"",
    telefono:"",
    password:"",
  };

  currentUser: Usuario={
    username :"",
    password:""
  };
  


  ngOnInit(): void {
    this.ListarUsuarios()
    this.OLocal();
    // console.log('hola '+this.ListarUsuario);
  }

  LDelet(){
    console.log("se elimino el local stored");
    localStorage.clear();
    this.route.navigate(['/loguin']);
  }

  OLocal(){

    // var user = localStorage.getItem("persona");
    // let usuario = JSON.parse(user) ;

    // 

    this.currentUser = JSON.parse(localStorage.getItem('persona') || '{}');

    let usuario = this.currentUser.username;
    let contrasena = this.currentUser.password;
    console.log('usuario y cotntraseña del local: ' +usuario+'  '+contrasena);
    if( !contrasena && !usuario ){
      
      // console.log( contrasena == "" );
      this.route.navigate(['/loguin']);
      console.log('OLocal parte del IF');;
    }else{
      console.log(' parte del else');

    }

  }

  AgregarUsuario(form: any){
    this.usuarioService.AddUsuario(this.usuario).subscribe(
      res=>{
        // console.log(res)
        this.ListarUsuarios();
      },
      err=>{
        // console.log(err)
      })
    // console.log(this.usuario);
  }

  ListarUsuarios(){
    this.usuarioService.getUsarios().subscribe(
      res =>{
        let ress =  Object.keys(res);
        console.log(ress);
        console.log(res)
        this.ListarUsuario=<any>  res;
        // console.log(typeof(this.ListarUsuario))
      },
      err =>{
        // console.log(err)        
      }
    );
  }

  eliminar(id:number){
    console.log('usuario eliminado' + id)
      this.usuarioService.EliminarUsuario(id).subscribe(
        res =>{
          // console.log('usuario eliminado')
          this.ListarUsuarios();
        },
        err => {
          console.log(err)
        }
      );
  }


  modificar(id:number){

    console.log("metodo modificar");
    console.log(this.usuario);
    this.usuarioService.ModificarUsuario(this.usuario.id,this.usuario).subscribe(
      res =>{
        console.log(res)
        this.ListarUsuarios();
      },
      err =>{
        console.log(err)        
      });
  }


  CargarUsuario(id:number){ 
    this.usuarioService.getUnUsuario(id).subscribe(
      res => {
        this.usuario = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
