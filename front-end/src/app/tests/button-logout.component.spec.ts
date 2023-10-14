import {TestBed} from "@angular/core/testing"
import { ButtonLogoutComponent } from "../components/button-logout.component"

describe("ButtonLogoutComponent",()=>{
    it('Should create',()=>{
        let fixture = TestBed.createComponent(ButtonLogoutComponent)
        let component = fixture.componentInstance
        fixture.detectChanges()
         expect(component).toBeDefined()
    })

    it('Should create button',()=>{
        let fixture = TestBed.createComponent(ButtonLogoutComponent)
        let compiled = fixture.nativeElement
        fixture.detectChanges()
        expect(compiled.querySelector("button")).toBeTruthy()
    })
    
    it('Should remove JWT and logout',()=>{
        let fixture = TestBed.createComponent(ButtonLogoutComponent)
        let component = fixture.componentInstance
        localStorage.setItem('jwt',"TOKEN")
        fixture.detectChanges()
        component.logOut()
        expect(localStorage.getItem('jwt')).toBeNull()
    })
   
})