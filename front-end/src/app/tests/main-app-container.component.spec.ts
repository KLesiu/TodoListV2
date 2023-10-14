import {TestBed} from "@angular/core/testing"
import { MainAppContainerComponent } from "../components/main-app-container.component";

describe('MainAppContainerComponent',()=>{
    it('Should create',()=>{
       let fixture = TestBed.createComponent(MainAppContainerComponent)
       let component = fixture.componentInstance
       fixture.detectChanges()
        expect(component).toBeDefined()

    })
    it('Should create forms section',()=>{
        let fixture = TestBed.createComponent(MainAppContainerComponent)
        let component = fixture.componentInstance
        component.isLogIn = false
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector("app-register-form ") && compiled.querySelector("app-login-form")).toBeTruthy()
    })
    it('Should create task section',()=>{
        let fixture = TestBed.createComponent(MainAppContainerComponent)
        let component = fixture.componentInstance
        component.isLogIn = true
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector("app-submit-task")).toBeTruthy()
    })
    it('Should create loading section',()=>{
        let fixture = TestBed.createComponent(MainAppContainerComponent)
        let component = fixture.componentInstance
        component.isLogIn=true
        component.listState={state:"loading"}
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector("app-loading-element-train")).toBeTruthy()

    })
    it('Should change isLogin value',()=>{
        let fixture = TestBed.createComponent(MainAppContainerComponent)
        let component = fixture.componentInstance
        component.isLogIn=false
        component.changeisLogInStatus(true)
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(component.isLogIn).toBe(true)
    })
    it('Should change isLogin value auto',()=>{
        let fixture = TestBed.createComponent(MainAppContainerComponent)
        let component = fixture.componentInstance
        component.isLogIn=false
        localStorage.setItem('jwt',"TOKEN")
        component.ngOnInit()
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(component.isLogIn).toBe(true)
    })

})