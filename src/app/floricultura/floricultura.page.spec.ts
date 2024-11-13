import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloriculturaPage } from './floricultura.page';

describe('FloriculturaPage', () => {
  let component: FloriculturaPage;
  let fixture: ComponentFixture<FloriculturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FloriculturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
