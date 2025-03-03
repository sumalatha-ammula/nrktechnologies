import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwaggerPage } from './swagger.page';

describe('SwaggerPage', () => {
  let component: SwaggerPage;
  let fixture: ComponentFixture<SwaggerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
