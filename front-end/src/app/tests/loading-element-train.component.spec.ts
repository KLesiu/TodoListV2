import {TestBed} from "@angular/core/testing"
import { LoadingElementTrainComponent } from "../components/loading-element-train.component"

describe("LoadingElementTrainComponent",()=>{
    it("Should create",()=>{
        let fixture = TestBed.createComponent(LoadingElementTrainComponent)
        let compiled = fixture.nativeElement
        expect(compiled.querySelector(".loading-p")).toBeTruthy()
    })
})