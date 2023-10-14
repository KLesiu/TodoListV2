import {TestBed} from "@angular/core/testing"
import { RegisterFormComponent } from "../components/register-form.component"

describe("RegisterFormComponent",()=>{
    it("Should create register form",()=>{
        let fixture = TestBed.createComponent(RegisterFormComponent)
        let compiled = fixture.nativeElement
        fixture.detectChanges()
        expect(compiled.querySelector('button').textContent).toBe("Register")
    })
})