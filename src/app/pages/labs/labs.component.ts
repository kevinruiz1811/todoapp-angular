import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'todoapp-angular';
  tasks = signal([
    'Instalar angular',
    'Crear el proyecto',
    'Crear componentes',
    'Iniciar a desarrollar',
  ]);
  disabledBtn = true;
  name = signal('Kevin Ruiz');
  person = {
    name: 'Kevin Ruiz',
    age: 20,
    avatar:
      'data:image/png;base64,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',
  };
  clickHandler() {
    alert('Funciona!!');
  }
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
}
