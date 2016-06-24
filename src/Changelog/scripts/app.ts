import {Component} from "angular2/core"
import {MyModel} from "./model"

@Component({
    selector: `my-app`,
    template: `<div>Hello from </div>`
})
export class AppComponent {
    model = new MyModel();
    getCompiler() {
        return this.model.compiler;
    }
}