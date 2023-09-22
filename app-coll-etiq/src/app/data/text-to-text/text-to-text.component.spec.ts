import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToTextComponent } from './text-to-text.component';

describe('TextToTextComponent', () => {
  let component: TextToTextComponent;
  let fixture: ComponentFixture<TextToTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextToTextComponent]
    });
    fixture = TestBed.createComponent(TextToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
