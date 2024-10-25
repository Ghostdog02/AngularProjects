import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `
        <h2>
            Success: Your app is working
        </h2>
    `,
    styles: `
        h2{
            color: green;
            font-size: 15px;
        }
    `
})
export class SuccessAlertComponent{

}