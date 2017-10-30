import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from '../../../../../..';
import { TabItemPage } from './tab-item-page';


@NgModule({
  imports: [
    IonicPageModule.forChild(TabItemPage)
  ],
  declarations: [
    TabItemPage
  ],
  entryComponents: [
    TabItemPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabItemPageModule { }