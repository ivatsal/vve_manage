import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  createVenture(){
    window.location.href = "/project-on-board";
  }

  createNewuser(){
    window.location.href = "/create-user"
  }

  userProfiles(){
    window.location.href = "/user"
  }

  edituser(){
  }

  logout(){
    window.location.href = ""
  }
}
