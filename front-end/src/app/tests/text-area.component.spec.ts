import {TestBed} from "@angular/core/testing"
import { AutoFieldAreaComponent } from "../components/text-area.component"

describe("AutoFieldAreaComponent",()=>{
    it('Should create',()=>{
        let fixture = TestBed.createComponent(AutoFieldAreaComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector('textarea')).toBeTruthy()
    })
})