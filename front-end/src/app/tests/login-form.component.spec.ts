import {TestBed} from "@angular/core/testing"
import { LoginFormComponent } from "../components/login-form.component"

describe("LoginFormComponent",()=>{
    it("Should create login form",()=>{
        let fixture = TestBed.createComponent(LoginFormComponent)
        let compiled = fixture.nativeElement
        fixture.detectChanges()
        expect(compiled.querySelector('button').textContent).toBe("Login")
    })
})