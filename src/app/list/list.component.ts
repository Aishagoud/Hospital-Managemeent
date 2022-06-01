import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private serv :LoginServiceService,
    private route :Router) { }
  pat_data:any;


  ngOnInit(): void {
    this.pat_data=this.serv.onget().subscribe(
      (data)=>{this.pat_data=data}
    )
  }
  
  godata(id:any)
    {
      this.route.navigate(['/show',id])
    }


    onFormDel(id:any)
    {     
      this.serv.onFormDel(id).subscribe(
        (deleted_data)=>{console.log(deleted_data);
        }
      )

      let ondelete=confirm("Do you want to Delete the data?")
        if(ondelete)
        {
          console.log("Data Deleted");
        }
      
    }

    // all data delete
    onAllDel()
    {      
      this.serv.allDelete().subscribe(
        (deleted_data)=>{console.log(deleted_data);
        }
      )
    }


}

