import { RouterModule } from '@angular/router';
import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-allview',
  templateUrl: './allview.component.html',
  styleUrls: ['./allview.component.scss']
})
export class AllviewComponent implements OnInit {

  public message;
  public students: Student[];
  constructor(private service: StudentserviceService,private route:RouterModule) {

  }

  ngOnInit(): void {
     this.getallstudentdetail();
  }
 public  getallstudentdetail(){
    this.service.getallstudentdata().subscribe(data=>{this.students=data},
      error=>{console.log(error)});

  }
  public removerecord(id: number){
    alert('are you sure ???');
    this.service.deleteOnerecord(id).subscribe(
      data=>{this.message=data,this.getallstudentdetail()},

      error=>{console.log(error)});
  }

}
