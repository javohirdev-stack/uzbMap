
import './App.css';
import Highcharts from 'highcharts'
import highchartsMap from "highcharts/modules/map";
import HighchartsReact from 'highcharts-react-official'
import UzbekistanGeoData from '@highcharts/map-collection/countries/uz/uz-all.geo.json';

highchartsMap(Highcharts);
function App() {

  var data = [
    ['uz-fa', 0],
    ['uz-tk', 1],
    ['uz-an', 2],
    ['uz-ng', 3],
    ['uz-ji', 4],
    ['uz-si', 5],
    ['uz-ta', 6],
    ['uz-bu', 7],
    ['uz-kh', 8],
    ['uz-qr', 9],
    ['uz-nw', 10],
    ['uz-sa', 11],
    ['uz-qa', 12],
    ['uz-su', 13]
  ];
  const mapOptions = {
    chart: {
        height:'500px',
      map: 'countries/uz/uz-all'
    },

    title: {
      text: ' '
    },

    subtitle: {
      text: ' Uzbekistan map'
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    colorAxis: {
      min: 0
    },

    series: [{
      data: data,
      mapData: UzbekistanGeoData,
      type:'map',
      name: 'Random data',
      states: {
        hover: {
          color: 'blue'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  }
  return (<>

    <div className='App'>
      <HighchartsReact
        constructorType={'mapChart'}
        highcharts={Highcharts}
        options={mapOptions}
      />
    </div>
  </>);
}

export default App;
