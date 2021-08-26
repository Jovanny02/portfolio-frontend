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
  
  

  lineChartType: ChartType = 'line'
  showLegend: boolean = false
  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    yAxisID : "Price (USD)",
    xAxisID:  "Dates"
  }


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    //console.log(JSON.stringify(changes))
    if(this.stockHistory !== undefined){
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
