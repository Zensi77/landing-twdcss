import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './animations-page.component.html',
  styles: `
    .colors div{
      height: 50px;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class AnimationsPageComponent {}
