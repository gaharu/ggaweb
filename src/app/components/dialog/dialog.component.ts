import {Component, Inject} from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'my-dialog',
    templateUrl: 'dialog.html',
    styleUrls: ['dialog.css']
})

export class DialogComponent {
    constructor (public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
        
    }

    onCancel() {
        this.dialogRef.close();
    }
}