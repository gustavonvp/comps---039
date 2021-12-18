import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {
        value: 22, label: '# of Users'
    },
    {
        value:900, label: 'Revenue'
    },
    {
        value:50, label: 'Reviews'
    },
  ];

  items = [
    {
      image: '../../assets/couch.jpeg',
      title: 'Counch',
      description: 'This is afantastic couch to sit on'
    },
    
    {
      image: '../../assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put in on!'
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
