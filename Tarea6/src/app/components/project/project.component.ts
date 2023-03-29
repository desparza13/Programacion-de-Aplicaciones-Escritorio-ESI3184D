import { Component } from '@angular/core';

interface Project {
  name: string;
  date: string;
  description: string;
  languages: string[];
  github: string;
  ideas: string[];
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects: Project[] = [];
  project:Project = this.projects[0];
  currentProjectIndex:number = 0;
  prevProject(){
    this.currentProjectIndex--;
    this.project = this.projects[this.currentProjectIndex];
  }
  nextProject(){
    this.currentProjectIndex++;
    this.project = this.projects[this.currentProjectIndex];
  }
  constructor(){
    this.projects = [
      {
        name: "Adopt a friend",
        date: "December 2022",
        description: "Webpage developed to help abandoned pets to find a home through a user friendly interface where people can adopt a pet or post a pet up for adoption",
        languages: ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain", "devicon-mongodb-plain", "devicon-nodejs-plain"],
        github: "https://github.com/desparza13/AdoptAFriend",
        ideas: ["Developed the UI through CSS and Bootstrap5",
                "Managed the project following the AGILE method",
                "Created the data models and synced it with the webpage using MongoDB"]
      },
      {
        name: "Productivife",
        date: "May-August 2022",
        description: "Productivife is an app that will allow its users to organize their daily activities into smaller tasks displayed as to do items planning at the same time when and where they are planning to do them, giving them a better overview of how their week is looking and plan ahead.",
        languages: ["devicon-java-plain"],
        github:"https://github.com/desparza13/Productivife",
        ideas: ["Developed a To-Do list app with all CRUD functionalities.",
                "Managed login system and authentication with Firebase and Facebook SDK while manually creating the functions that allow to verify if a Facebook user has previously logged in, and if he/she hasn’t, create a new firebase user.",
                "Implemented data persistence by adding a SQL database where the To-Do items are stored locally on the device and synced with the Firebase Realtime Database.",
                "Implemented ordering and filtering algorithm as well as gestures that allow the user to mark items as completed or delete it to increase the UX and make the app easy to use."
              ]
      },
      {
        name:"FCCToolKit",
        date: "May 2021",
        description: "Developed a Python-based truth table generator that given a logical statement with premises from p up to z will display the individual values for each operation and the final statement values as a school project.",
        languages: ["devicon-python-plain"],
        github: "https://github.com/desparza13/FCCToolKit",
        ideas: ["Researched and implemented recursive functions and taught my teammate what I learnt.",
                "Used recursion for the evaluation of each individual operation until the complete statement was evaluated."]
      },
      {
        name:"COVIDLife",
        date: "May 2021",
        description: "Built an Ionic app that provides with relevant information on the COVID-19 pandemic using an API as an extracurricular project.",
        languages: ["devicon-ionic-original", "devicon-html5-plain", "devicon-typescript-plain", "devicon-sass-original", "devicon-javascript-plain"],
        github: "https://github.com/desparza13/COVID-Life",
        ideas: ["Led the team through the Interns Hackaton where this app was awarded the first place.",
                "Implemented the preventive information tab with TypeScript and HTML.",
                "Implemented a user interactive test understanding the connection between pages and the communication between TypeScript and HTML"]
      },
      {
        name: "Learning with DonkeyKong",
        date: "November 2020",
        description: "Built a Donkey Kong learning game for elementary students on Python using only a rendering library and file reading.",
        languages: ["devicon-python-plain"],
        github: "https://github.com/desparza13/Learning-With-DK",
        ideas: ["Implemented the question bank’s file reading and usage to choose a random question whenever a collision between the player and the barrel occurred.",
                "Developed a system to detect collisions with barrels and the jumping functions and gravity as well."]
      }
    ]
    this.project = this.projects[this.currentProjectIndex];
  }

}
export class WorkExperienceComponent {
  constructor(){

  }
}

