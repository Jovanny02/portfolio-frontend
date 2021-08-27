import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ChartType } from 'chart.js';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { StockHistoricalData } from '../util/StockHistoricalData';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit, OnChanges {

  @Input() stockHistory!:StockHistoricalData

  closePrices:number[] = []
  dates:any[] = []
  closePriceObject:Array<any> = []
  
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,0,0,1)',
      borderColor: 'rgba(148,159,177,0.8)',
      pointBackgroundColor: 'rgba(0,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }]

  lineChartType: ChartType = 'line'
  showLegend: boolean = false
  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    yAxisID : "Price (USD)",
    xAxisID:  "Dates",
    legend: {
      labels: {
          fontColor: "black",
          fontSize: 18
      }
    }
  }


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    //console.log(JSON.stringify(changes))
    if(this.stockHistory !== undefined && this.stockHistory != null){
      this.closePrices=[]
      this.dates=[]
      for(let i = this.stockHistory.prices.length-1; i >= 0 ; i--){
        let dateString = this.stockHistory.prices[i].date;
        this.closePrices.push(this.stockHistory.prices[i].close)
        this.dates.push(dateString.substring(0, dateString.indexOf("T")))
      }
    }

    //this.closePriceObject = [{data: this.closePrices, label: this.stockHistory.stockCode}]
  }

  ngOnInit(): void {
  }

}
