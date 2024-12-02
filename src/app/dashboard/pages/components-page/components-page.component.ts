import { Component } from '@angular/core';
import { PriceSelectorComponent } from '../../../shared/components/price-selector/price-selector.component';
import { BlogExampleComponent } from '../../../shared/components/blog-example/blog-example.component';
import { FormExampleComponent } from '../../../shared/components/form-example/form-example.component';
import { GaleryPostComponent } from '../../../shared/components/galery-post/galery-post.component';
import { CardExampleComponent } from '../../../shared/components/card-example/card-example.component';
import { CardExample2Component } from '../../../shared/components/card-example-2/card-example-2.component';

@Component({
  standalone: true,
  imports: [
    PriceSelectorComponent,
    BlogExampleComponent,
    FormExampleComponent,
    GaleryPostComponent,
    CardExampleComponent,
    CardExample2Component,
  ],
  templateUrl: './components-page.component.html',
  styles: ``,
})
export class ComponentsPageComponent {}
