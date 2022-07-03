import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions ,ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent implements OnInit {

  //chartTypes to select (appropriés pour mono ou multi serie):
  monoChartTypes : ChartType[] = [  'bar' , 'pie' , 'doughnut' ,'polarArea' ];
  multiChartTypes : ChartType[] = [ 'line' , 'bar'  ];

  //pour solution 2 du refresh:
  @ViewChild(BaseChartDirective) //first chart with BaseChartDirective ?
  public monoChartDirective: BaseChartDirective | undefined;

  refreshChartVentes(){
    console.log("refreshChartVentes");
    /*
    Solution1 (moins bien que .update()):
    let currentChartTypeToRestore = this.monoChartType; 
    let otherTempChartType : ChartType= currentChartTypeToRestore=='line'?'bar':'line';
    this.monoChartType=otherTempChartType; //change chartType to resfresh
    setTimeout(()=>{this.monoChartType=currentChartTypeToRestore; },2)
    */

    /*
    //solution2:
    this.monoChartDirective?.chart?.update();
    */

   //solution3 : 
   this.monoChartData[0].data=this.ventes; //ne suffit pas (modification d'une sous partie pas détectée)
   //le remplacement de toute la partie "[datasets]" est détectée et conduit à un refresh
   this.monoChartData=JSON.parse(JSON.stringify(this.monoChartData));//remplacement par clone
  }
  
  //type of first chart (mono serie)
  monoChartType  : ChartType = 'bar'; //by default

  //type of second chart (multi series)
  multiChartType: ChartType = 'line'; //by default

  ventes = [857, 623, 345]; //valeurs affichées dans le premier graphique

  monoChartData: ChartDataset[] = [
    { data: this.ventes, label: 'Ventes selon secteurs' },
  ];
  monoChartLabels: string[] = ['Papeterie', 'Fruits/légumes', 'Autres'];

  
  multiChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  multiChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  /* withLegend = true; (by default) //  [legend]="withLegend" */
 /*
  chartOptions = {
    responsive: true,
  };
  //par defaut responsive
  // [options]="chartOptions"
  */

}
