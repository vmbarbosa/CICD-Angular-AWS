import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycounterComponent } from './mycounter.component';

describe('MycounterComponent', () => {
  let component: MycounterComponent;
  let fixture: ComponentFixture<MycounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 to number when the + button is clicked',()=>{
    //Arrange
    const result: number = 1;
    //Act
    component.counter(0,true)
    //assert
    expect(component.num).toBe(result)
  })

  it('should substract 1 to number when the - button is clicked',()=>{
    component.counter(1,false)
    expect(component.num).toBe(0)
  })

  it('should not allow negative numbers',()=>{
    component.counter(0,false)
    expect(component.num).toBe(0)
  })

});
