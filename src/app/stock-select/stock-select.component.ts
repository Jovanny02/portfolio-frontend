import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Investments } from '../util/Investments';

@Component({
  selector: 'app-stock-select',
  templateUrl: './stock-select.component.html',
  styleUrls: ['./stock-select.component.css']
})
export class StockSelectComponent implements OnInit, OnChanges {

  @Input() stocks!:Investments[]
  @Output() stockChangedEvent:EventEmitter<String> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //emit an event whenever the stocks change OR a new selection is made
    if(this.stocks == null || this.stocks == undefined || this.stocks.length == 0)
      return;

    this.stockChangedEvent.emit(this.stocks[0].stockSymbol)

  }

  updateSelected(selected:any){
    let value = selected.target.value
    
    this.stockChangedEvent.emit(value)
    console.log(value)
  }

}
