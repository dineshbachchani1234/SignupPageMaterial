import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  chart = [];

  item = ["2","1","3","4","6","8"];
  year=["2016","2017","2018","2019","2020","2021"];
  totalRevenue = [4000, 2000, 3000, 7000, 2500, 4250, 6000];
  noOfHours = [40, 27, 14, 8, 6, 5];
  mobileusers=[2.5,2.7,2.9,3.2,3.5,3.8 ];
  category= ["Excellent","Very Good", "Good", "Moderate","Not satisfied"];
  count = [76, 96, 101, 34, 8];
  constructor() { }

  ngOnInit(): void {

    this.chart = new Chart('chart1', {
      type: 'bar',
      data: {
        labels: this.item,
        datasets: [
          {
            label: 'Total Number of Hours - % to revert back',
            backgroundColor: '#007bff',
            borderColor: 'green',
            data: this.noOfHours,
            fill: false,
          }
        ]
      }
      
    })
    this.chart = new Chart('chart2', {
      type: 'pie',
      data: {
        labels: this.category,
        datasets: [
          {
            label: 'Customer Satisfactions',
            backgroundColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88'],
            borderColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88'],
            data: this.count,
            fill: true,
          }
        ]
      }
    })
  
  }

}
