import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSerie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> =[];
  promedioTemporadas: number = 0;
  constructor(private serieService: SerieService) { }
  getSerieList() {
    this.serieService.getSeries().subscribe(series => {
      console.log("series", series);
      this.series = series;
      this.calcularPromedio(this.series);
    });
  }
  ngOnInit() {
    this.getSerieList();
  }

  calcularPromedio(series: Array<Serie>){
    let sumaTemporadas: number = 0;
    series.forEach(serie => {
      sumaTemporadas += serie.seasons;
    });
    this.promedioTemporadas = sumaTemporadas / series.length;
  }

}
