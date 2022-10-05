import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})



export class PopComponent implements OnInit {
  items = [
    {id: 0,name: "Hover"},
    {id: 1,name: "Click"},
  ];

  msg: String; 
  constructor(private alertController: AlertController) { 
    this.msg = "que tal";
  }

  ngOnInit() {}

  async alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}
