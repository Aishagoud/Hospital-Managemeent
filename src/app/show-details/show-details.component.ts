import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private serv:LoginServiceService,
    private acr:ActivatedRoute) { }
    

  ngOnInit(): void {

this.getRouteParams()
this.getData()

    
  }
data_dump:any;
curr_id:any;
curr_stu:any;

url_data:any;

getRouteParams()
{
  this.acr.params.subscribe(
    (para)=>{this.curr_id  = para['id']}
  )
}
// function to get data from ser
getData()
{
   this.data_dump =   this.serv.onget()
   this.curr_stu = this.data_dump[this.curr_id]
   console.log(this.curr_stu)
}


} //class ends here
