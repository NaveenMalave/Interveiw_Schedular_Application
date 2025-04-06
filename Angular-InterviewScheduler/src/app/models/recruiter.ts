import { Time } from "@angular/common";

export class Recruiter {
    recruiterId :number=0;
    date? :Date;
    time?:string;
    rounds?:number;
    name?:string;
    designation?:string;
    emailId?:string;
    interviewStatus?:string;
    recomendedDesignation?:string;
    remarks?:string;
    offerLetterStatus ?:string;
    candidateId?:number;
constructor(recruiterId :number=0,
    date :Date,
    time:Time,
    rounds:number,
    name:string,
    designation:string,
    emailId:string,
    interviewStatus:string,
    recomendedDesignation:string,
    remarks:string,
    offerLetterStatus :string,
    candidateId:number){
        this.recruiterId=recruiterId;
        this.date=date;
        this.time=this.formatTime(time);
        this.rounds=rounds;
        this.name=name;
        this.designation=designation;
        this.emailId=emailId;
        this.interviewStatus=interviewStatus;
        this.recomendedDesignation=recomendedDesignation;
        this.remarks=remarks;
        this.offerLetterStatus=offerLetterStatus;
        this.candidateId=candidateId;
}
private formatTime(time: Time): string {
    // Convert Time to ISO 8601 string format
    const hours = time.hours.toString().padStart(2, '0');
    const minutes = time.minutes.toString().padStart(2, '0');
    return `${hours}:${minutes}:00`;
}
}
