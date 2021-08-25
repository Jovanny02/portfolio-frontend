import { Component, OnInit } from '@angular/core';
import {InvestmentsService} from "../../services/investments/investments.service";
import {InvestmentsI} from "../util/Investments";

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  investmentData: InvestmentsI[] = [];
  constructor(private investmentDataService: InvestmentsService) { }

  ngOnInit(): void {
    this.investmentDataService.getInvestment()
      .subscribe((data: InvestmentsI[]) => {
        this.investmentData = data;
        console.log(this.investmentData);
      });
  }

}
