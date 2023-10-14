import {TestBed} from "@angular/core/testing"
import { FooterComponent } from "../components/footer.component"

describe("FooterComponent",()=>{
    it('Should create footer',()=>{
        let fixture = TestBed.createComponent(FooterComponent)
        let compiled = fixture.nativeElement
        fixture.detectChanges()
        expect(compiled.querySelector("footer")).toBeTruthy()
    })
})