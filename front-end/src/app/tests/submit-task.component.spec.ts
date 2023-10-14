import {TestBed} from "@angular/core/testing"
import { SubmitTaskComponent } from "../components/submit-task.component"

describe("SubmitTaskComponent",()=>{
    it("Should create",()=>{
        let fixture = TestBed.createComponent(SubmitTaskComponent)
        let compiled = fixture.nativeElement
        expect(compiled.querySelector("button").textContent).toBe("ADD")
    })
})