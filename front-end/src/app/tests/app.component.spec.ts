import { AppComponent } from "../app.component";
import {TestBed} from "@angular/core/testing"

describe('AppComponent',()=>{
    let fixture: AppComponent
    beforeEach(()=>fixture = new AppComponent())
    
    it('Should have a title ToDoList',()=>expect(fixture.title).toEqual('ToDoList'))
        
    it("Should render correct title ToDoList v2",()=>{
        let fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector("h1").textContent).toEqual(' ToDoList v2')
    })

    it('Should render container',()=>{
        let fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector("app-main-app-container")).toBeTruthy()
    })
   
})