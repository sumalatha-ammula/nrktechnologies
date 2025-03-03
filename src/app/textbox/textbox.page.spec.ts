import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextboxPage } from './textbox.page';

describe('TextboxPage', () => {
  let component: TextboxPage;
  let fixture: ComponentFixture<TextboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
