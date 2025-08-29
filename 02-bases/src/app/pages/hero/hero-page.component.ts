import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe],
})

export class HeroPageComponent {
  //señales, forma actualizada de cambiar el estado de la aplicación
  name = signal('Ironman');
  age = signal(45);

  //señal computada, SON SEÑALES DE SOLO LECTURA 
  heroDescription = computed(() => {
      const description = `${ this.name() } - ${ this.age() }`;
      return description;
  });

  //
  capitalizedName = computed( () => this.name().toUpperCase());

  getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(){
    this.name.set('spiderman')
    this.age.set(22)
  }

  changeAge(){
    this.age.set(60);
  }

  resetForm(){
     this.name.set('Ironman')
     this.age.set(45)
  }



}


