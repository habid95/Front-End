import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../app/models/usuario'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "/api";
  constructor(private http:HttpClient) { }


  //todos los usuarios
  getUsarios(){
    return this.http.get(this.url);
  }

  //buscar un usuario
  getUnUsuario(id:Number){
    return this.http.get(this.url+ '/' +id);
  }

  // Agregar usuario
  AddUsuario(usuario:Usuario){
    return this.http.post(this.url,usuario);
  }

  //Eliminar usuario
  EliminarUsuario(id:number){
    return this.http.delete(this.url + '/' +id);
  }

  //modificar usuario
  ModificarUsuario(id:number , usuario:Usuario){
    return this.http.patch(this.url + '/' +id,usuario);
  }

  //Login Usuario
  buscarUsurio(usuario:Usuario){
    console.log(this.url + '/' +usuario.username+'/'+usuario.password);
    return this.http.get(this.url + '/' +usuario.username+'/'+usuario.password);
  }

}
