import {TestBed} from "@angular/core/testing"
import { ListTasksComponent } from "../components/list-tasks.component"

describe("ListTasksComponent",()=>{
    it('Should create p with information about the empty array tasks ',()=>{
        let fixture=TestBed.createComponent(ListTasksComponent)
        let compiled = fixture.nativeElement
        let component = fixture.componentInstance
        component.tasks.length=0
        fixture.detectChanges()
        expect(compiled.querySelector("p").textContent).toBe("You dont have any tasks!")
    })
    it('Should show edit mode',()=>{
        let fixture = TestBed.createComponent(ListTasksComponent)
        let compiled = fixture.nativeElement
        let component = fixture.componentInstance
        component.editMode=true
        component.switchingTask="652987f787a249a9c2f91574"
        component.tasks.push({_id:"652987f787a249a9c2f91574",
    name: "Learn js",done:true})
        fixture.detectChanges()
        expect(compiled.querySelector("app-auto-field-area")).toBeTruthy()
        
        
    })
    it('Should show task name and change done',()=>{
        let fixture = TestBed.createComponent(ListTasksComponent)
        let compiled = fixture.nativeElement
        let component = fixture.componentInstance
        component.tasks.push({_id:"652987f787a249a9c2f91574",
        name: "Learn js",done:false})
        component.tasks[0].done=true
        fixture.detectChanges()
        expect(compiled.querySelectorAll("span")[1].textContent).toContain("Learn js"),
        expect(compiled.querySelectorAll("span")[1].classList.contains("line-through")).toBe(true)
       


    })
})