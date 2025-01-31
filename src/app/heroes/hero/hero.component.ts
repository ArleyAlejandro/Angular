import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): string{
    return this.name = 'Hulk'
  }

  changeAge(): number{
    return this.age = 80;
  }

  resetForm():void{
    this.name = 'Ironman'
    this.age = 45

    //! instrucciones fuera del ciclo de deteccion de angular
    // tener cuidado con esto pq puede dar problemas 
    document.querySelectorAll('h1').forEach(e => {
      e.innerHTML = '<h1>Desde Angular</h1>'
    })
  }
}
