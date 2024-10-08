import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionComponent } from './configuracion.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfiguracionComponent', () => {
  let component: ConfiguracionComponent;
  let fixture: ComponentFixture<ConfiguracionComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, ConfiguracionComponent],
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
