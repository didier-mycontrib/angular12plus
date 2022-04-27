import { Component, OnInit } from '@angular/core';
import { circle, LatLng, latLng, Layer, marker, polygon, tileLayer } from 'leaflet';

class MyLocation{
  constructor(public name : String ="?" ,
              public centerCoord : [number,number,number] = [0,0,0]){
                // [latitude , longitude , altitude]
  }
}

@Component({
  selector: 'app-with-leaflet',
  templateUrl: './with-leaflet.component.html',
  styleUrls: ['./with-leaflet.component.scss']
})
export class WithLeafletComponent implements OnInit {

  defaultLocation : MyLocation = new MyLocation("?",[48.856614, 2.3522219, 0]);
  selectedLocation : MyLocation = this.defaultLocation;

  locations : MyLocation[] = [
    this.defaultLocation,
    new MyLocation("Paris (France)",[48.856614, 2.3522219 , 0]),
    new MyLocation("Stockholm (Suede)",[59.3293235, 18.0685808 , 0]),
    new MyLocation("NewYork (USA)",[40.712784, -74.005941, 0]),
    new MyLocation("Los Angeles (USA)",[34.0194, -118.411, 0]),
    new MyLocation("Tokyo (Japon)",[35.6894, 139.692, 0]),
    new MyLocation("Rio de Janeiro (Brésil)",[-22.9035, -43.2096, 0]),
    new MyLocation("Nairobi (Kenya)",[-1.2920659, 36.8219462, 0])
  ];

  frenchLocations : MyLocation[] = [
    new MyLocation("Paris",[48.856614, 2.3522219 , 0]),
    new MyLocation("Versailles",[48.801408, 2.130122 , 0]),
    new MyLocation("Senlis",[49.205164, 2.583212 , 0]),
    //new MyLocation("Bordeaux",[44.8378, -0.594 , 0]),
    new MyLocation("Lille",[50.62925, 3.057256, 0]),
    //new MyLocation("Lyon",[45.764043, 4.835659, 0]),
    //new MyLocation("Toulouse",[43.604, 1.44305, 0]),
    new MyLocation("Rouen",[49.443232, 1.099971, 0]),
    new MyLocation("Amiens",[49.894067, 2.295753, 0])
  ];

  selectedLocations : MyLocation[] = [];
  
	zoomLevels = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 , 15, 16, 17, 18 ];

  cloneCoords(coords : [number,number,number]) : [number,number,number] {
       return [ coords[0] ,  coords[1] , coords[2] ];
  }

  centerCoord : [number,number,number]
                = this.cloneCoords (this.defaultLocation.centerCoord);

  //bind via [leafletCenter]="center" (changes will be dynimacally applyed)
  center :LatLng = latLng(this.centerCoord);

  //bind via [leafletZoom]="zoom" (changes will be dynimacally applyed)
  zoom : number = 5;

  //tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';//selon langue de chaque pays
  tileLayerUrl = 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';//version francaise
  topoTileLayerUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'; //fond de carte topographique (relief)
  //tileLayerUrl = 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'; //transports (aeroports, routes)
  //tileLayerUrl = "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png";
  //tileLayerUrl = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";
  //tileLayerUrl = "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"; //pistes cyclables
  //tileLayerUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}";
  satTileLayerUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"; //images satelites
  //tileLayerUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}";
  //tileLayerUrl = "https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"; //carte IGN , niveau de zoom différent selon pays
  //tileLayerUrl = "https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"; //carte IGN , images satelite
  
  //NB: options is just used for initialization 
  options = {
    layers: [
      tileLayer(this.tileLayerUrl, { maxZoom: 18, attribution: 'OpenStreetMap or ...' })
    ],
    zoom: this.zoom,
    center: latLng(this.centerCoord)
  };

  layersControl = {
    baseLayers: {
      'OpenStreetMap/fr': tileLayer(this.tileLayerUrl, { maxZoom: 18, attribution: 'fr' }),
      'satellite': tileLayer(this.satTileLayerUrl, { maxZoom: 18, attribution: 'ArcGIS' }),
      'topo (relief)': tileLayer(this.topoTileLayerUrl, { maxZoom: 18, attribution: 'topo' })
    },
    overlays: {
     
    }
  }

/*
  myLayers = [
    circle([ 48.856614, 2.3522219 ], { radius: 5000 }),
    polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
  ];
  */

  myLayers : Layer[] = [];

  refreshMyLayer(){
    this.myLayers = [];
    for(let loc of this.selectedLocations){
      this.myLayers.push( circle([ loc.centerCoord[0], loc.centerCoord[1] ], 
                                 { radius: 5000 , 
                                  color : 'red' , 
                                  fillColor: '#f03', 
                                  fillOpacity: 0.2,})
                              .bindTooltip(<string> loc.name)
                          );
    }
  }

  constructor() {
    this.refreshMyLayer();
  }

  ngOnInit(): void {
  }

  onNewLocation(){
    this.centerCoord=this.cloneCoords(this.selectedLocation.centerCoord);
    this.refreshNewCenter();
 }

  onNewLat(latInputValue:string){
     this.centerCoord[0]=Number(latInputValue);
     this.refreshNewCenter(); this.refreshLocation();
  }

  onNewLng(lngInputValue:string){
    this.centerCoord[1]=Number(lngInputValue);
    this.refreshNewCenter(); this.refreshLocation();
 }

 refreshNewCenter(){
  console.log("new centerCoord:" + this.centerCoord);
  this.center=latLng(this.centerCoord);
}

refreshLocation(){
 if((this.selectedLocation.centerCoord[0]- this.centerCoord[0]) > 0.000001 
    || (this.selectedLocation.centerCoord[1] - this.centerCoord[1]) > 0.000001  )
    {
      this.defaultLocation.centerCoord=this.cloneCoords(this.centerCoord);
      this.selectedLocation=this.defaultLocation;
    }
}

onCenterChange(center: LatLng) {
  setTimeout(() => {
    this.center = center;
    this.centerCoord[0] = center.lat;
    this.centerCoord[1] = center.lng;
    this.refreshLocation();
  });
}

onZoomChange(zoom: number) {
  setTimeout(() => {
    this.zoom = zoom;
  });
}


}
