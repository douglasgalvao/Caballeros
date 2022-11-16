import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSobreComponent } from './content-sobre.component';

describe('ContentSobreComponent', () => {
  let component: ContentSobreComponent;
  let fixture: ComponentFixture<ContentSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
