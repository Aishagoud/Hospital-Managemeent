import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  // patients = [
  //   {
  //     id: "0", name: "Aishwarya", age: 22,
  //     gender: "female", dept: "FSD",
  //     Location: "Andheri", contactno: 354675890,
  //     Gardian_name: "Monica", Gardian_no: 546738392,
  //     Dob: 22 - 12 - 1999, Doctor: "Mrs.Aruna", Bill: 4567,
  //     Bedno: 23, Medicine: "weretru"
  //   },
  //   {
  //     id: "1", name: "Bhanushree", age: 19,
  //     gender: "female", dept: "FSD",
  //     Location: "Andheri", contactno: 354675890,
  //     Gardian_name: "Madhu", Gardian_no: 546738392,
  //     Dob: 23 - 3 - 2000, Doctor: "Mrs.Aruna", Bill: 1367,
  //     Bedno: 14, Medicine: "gdhfiu"
  //   }
  // ]

  constructor(private http :HttpClient) { }
  // getStudents() {
  //   return this.patients
  // }

  // get method
  onget()
  {
    return this.http.get("http://localhost:3000/get_patList")
  }

  // post method
  onpost(data:any)
  {
    return this.http.post("http://localhost:3000/post_patList",data)
  }

  // delete method
  onFormDel(id:any)
  {
    return this.http.delete(`${"http://localhost:3000/delete_patList"}/${id}`)
  }
  allDelete()
  {
    return this.http.delete(`${"http://localhost:3000/deleteall"}`)
  }

  // adding data
  // regPatient(i: any) {
  //   this.patients.push(i)
  // }



}
