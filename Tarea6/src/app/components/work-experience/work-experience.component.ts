import { Component } from '@angular/core';

interface Job {
  index: number;
  company: string;
  position: string;
  dates: string;
  description: string;
  ideas: string[];
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})

export class WorkExperienceComponent {
  jobs: Job[] = [
  ]
  job:Job=this.jobs[0];
  currentJobIndex:number=0;
  prevJob(){
    this.currentJobIndex--;
    this.job = this.jobs[this.currentJobIndex];
  }

  nextJob(){
    this.currentJobIndex++;
    this.job = this.jobs[this.currentJobIndex];
  }
  constructor(){
    this.jobs = [
      {
        index: 1,
        company:"NIKE",
        position:"Digital Commerce Intern",
        dates:"August 2022 - Present",
        description:"Worked as a Data Analyst Intern developing solutions through reporting and creating dashboards for Mexico and APLA Tech teams",
        ideas: ["Created dashboards using Tableau and Tableau Prep to provide visibility and insights on internal projects.",
              "Worked with large data sets, cleaned and transformed data using SQL, tableau, and excel.",
              "Demonstrated excellent communication and presentation skills to convey complex data insights to non-technical stakeholders.",
              "Developed and implemented data collection and tracking methodologies to ensure accuracy and consistency."
              ]
      },
      {
        index: 2,
        company:"Meta",
        position:"Meta University Intern",
        dates:"May 2022 - August 2022",
        description:"Participated in an Android development bootcamp followed by a hands-on project work supervised by a Meta engineer manager and mentor.",
        ideas: [ "Developed a To-Do list app with all CRUD functionalities",
              "Managed login system and authentication with Firebase and Facebook SDK while manually creating the functions that allow to verify if a Facebook user has previously logged in, and if he/she hasn’t, create a new firebase user.",
              "Implemented data persistence by adding a SQL database where the To-Do items are stored locally on the device and synced with the Firebase Realtime Database.",
              "Implemented ordering and filtering algorithm as well as gestures that allow the user to mark items as completed or delete it to increase the UX and make the app easy to use."
        ]
      },
      {
        index: 3,
        company:"NIKE",
        position:"Digital Commerce Intern",
        dates:"July 2021 - May 2022",
        description:"Worked and contributed on the Digital and Support team",
        ideas: [ "Worked with international teams to come up with a webpage for engaging and improving communication",
              "Developed dashboards to keep track on the incidents and tickets assigned to Mexico, Argentina and Brazil allowing the team to better visualize the overall environment, easily notice the cause of a recurrent issue, and better divide the workload in the team.",
              "Retrieved crucial information through SQL and SAP to complete lost information on some reports.",
              "Automized SQL queries in Excel to monitor sales on SNKRS launches"
        ]
      },
      {
        index: 4,
        company:"Pice-Software",
        position:"Software Engineer Intern",
        dates:"August 2019",
        description:"Worked at a small software developing company during the summer",
        ideas: ["Developed HTML formats to correctly convey information that was sent to the users via email",
              "Worked on the e-mail automation synchronizing the client’s database and the formats."
        ]
      }
    ]
    this.job=this.jobs[1];
  }
}

