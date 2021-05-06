import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  selectedValue:number=0;
  n="kamal";
  
  student:Student=new Student(0,"",0);

  ngOnInit(): void {
  }
  students:Student[]=[
    {id:1,name:'Cheenu',age:21},
    {id:2,name:'Meenu',age:22},
    {id:3,name:'Pinku',age:23},
    {id:4,name:'Panku',age:21},
  ]
  check():Student
  {
    for(let std of this.students)
    {
      if(std.id==this.selectedValue)
      {
        this.student=std;
      }
      
    }
    return this.student;
    
  }

}