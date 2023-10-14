import {TestBed} from "@angular/core/testing"
import { RemoveTaskButtonComponent } from "../components/remove-task-button.component"

describe("RemoveTaskButtonComponent",()=>{
    it("Should create",()=>{
        let fixture = TestBed.createComponent(RemoveTaskButtonComponent)
        let compiled = fixture.nativeElement
        expect(compiled.querySelector("span").textContent).toBe("Are you sure?")
    })
  
})