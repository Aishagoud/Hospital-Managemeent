import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  data: any
  pat_reg = new FormGroup(
    {
      name: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl('',[Validators.email]),
      condition:new FormControl(''),
      dept:new FormControl(''),
      Location: new FormControl(''),
      Contact: new FormControl(''),
      Gardian_name: new FormControl(''),
      Gardian_no: new FormControl(''),
      Dob: new FormControl(''),
      Doctor: new FormControl(''),
      Bill: new FormControl(''),
      Bedno: new FormControl(''),
      Medicine: new FormControl(''),
      upload:new FormControl('')
    }
  )
   get email()
  {
    return this.pat_reg.get('email')
  }
  constructor(private serv:LoginServiceService) { }

  ngOnInit(): void {

  }
  // saving data
  postData()
  {
    console.log(this.pat_reg.value);
    this.serv.onpost(this.pat_reg.value).subscribe(
    ()=>{console.log("data saved")})
   }

}
