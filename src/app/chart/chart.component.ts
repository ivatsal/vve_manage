import { Component, Input } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  public chartOptions: ApexOptions | any;
  @Input() series = [10, 18 , 20];
  @Input() labels = ['Pending', 'Review', 'Completed'];

  constructor() {
    this.chartOptions = {
      chart: {
        height: 300,
        type: 'donut',
      },
      dataLabels: {
        enabled: true,
      },
      responsive: [
        {
          breakpoint: 700,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
            plotOptions: {
              pie: {
                customScale: 0.9,
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      label: 'Projects status',
                      fontSize: '12px',
                      fontWeight: 500,
                    },
                    value: {
                      show: true,
                      fontSize: '20px',
                      fontWeight: 600,
                      offsetY: 10,
                      formatter(val: any) {
                        return;
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      colors: [
        '#ff5b4f',
        '#e7e373',
        '#302a75',
        '#F59E0B',
        '#FACC15',
        '#999999',
      ],
    };
  }

  ngOnInit(): void {}
}
