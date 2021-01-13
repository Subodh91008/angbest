import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public Students: Student=new Student();
 public msg;
 public  rex=/^[A-z]/;
  constructor(private service: StudentserviceService) { }

  ngOnInit(): void {

  }


  public savestudent(){

     if (this.Students.id != null&&this.Students.id != undefined)

      if  (this.Students.name != null  && this.Students.name != undefined && this.Students.name.match(this.rex))
        if (this.Students.rollnumber != null&&this.Students.rollnumber != undefined)
          if (this.Students.book != null&&this.Students.book != undefined)
            if (this.Students.fees != null&&this.Students.fees != undefined){
      this.service.savestudentinfo(this.Students).subscribe(

        data=>{this.msg=data;
          console.log(data);
          this.Students=new Student()},
        error=>{console.log(error);
        }

        );
     }

     else{
       alert("no data");
     }
        }

}
