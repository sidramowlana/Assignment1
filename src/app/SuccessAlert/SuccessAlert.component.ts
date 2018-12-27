import { Component } from "@angular/core";

@Component({
    selector: 'app-successAlert',
    templateUrl: './SuccessAlert.component.html',
    styles: [`                
        .messageWarning{
            color: white;
        }
    `]

})
// .messageSuccess{
//     color: yellow;
// },
export class SuccessAlert
{
   messageStatus:String="warning Message Alert";

   constructor()
   {
       this.messageStatus = Math.random() > 0.5 ? "success Message Alert":"warning Message Alert";
   }

   getStatus()
   {
       return this.messageStatus;
   }

   getColor()
   {
       return this.messageStatus ==="success Message Alert" ? "green": "red";
   }
}