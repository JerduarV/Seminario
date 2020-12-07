import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLectPage } from './test-lect.page';

describe('TestLectPage', () => {
  let component: TestLectPage;
  let fixture: ComponentFixture<TestLectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestLectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
