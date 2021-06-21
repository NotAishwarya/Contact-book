import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactBookComponent } from './component/contact-book/contact-book.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [{
  path: '',
  component: FormComponent
},
{
  path: 'contactbook',
  component: ContactBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
