import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturasPage } from './lecturas.page';

describe('LecturasPage', () => {
  let component: LecturasPage;
  let fixture: ComponentFixture<LecturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
