import { Component } from '@angular/core';
import { PriceSelectorComponent } from "../../../shared/components/price-selector/price-selector.component";
import { BlogExampleComponent } from "../../../shared/components/blog-example/blog-example.component";

@Component({
  standalone: true,
  imports: [PriceSelectorComponent, BlogExampleComponent],
  templateUrl: './helpers-page.component.html',
  styles: ``
})
export class HelpersPageComponent {

}
