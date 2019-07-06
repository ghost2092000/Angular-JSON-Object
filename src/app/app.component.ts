import { Component } from '@angular/core';

interface Email {
  name: string;
  date: number;
  subject: string;
  comment: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public email : Email[];
  public newEmail: Email;


  constructor() {
    this.email = [{
      name: 'Robert',
      date: 1993, 
      subject:'First Email', 
      comment: 'This is an email. This is a cool email.'
    }];

    this.newEmail = {
      name: 'Jorge', 
      date: 1991, 
      subject: 'Hello', 
      comment: "Hello how are you???"
    };

    this.email.push(this.newEmail);

    this.newEmail = {
      name: 'Chung',
      date: 2018,
      subject: 'What is Chungus?',
      comment: 'According to Urban Dictionary, one of the top definitions for Chungus is An overweight giant earth destroying, god killing rabbit. In the memes, its basically a picture of a fat Bugs Bunny. ... The word "chungus" was coined by video game journalist Jim Sterling years before the meme went viral.'
    };

    this.email.push(this.newEmail);


  }

  ///This method adds poeples information to the json object
  addEmail(namee: string, datee: number, subjectt: string, commentt:string) {
    if (namee) {
      this.newEmail = { name: namee, date: datee, subject: subjectt, comment: commentt };
      this.email.push(this.newEmail);
    }
  }






}



