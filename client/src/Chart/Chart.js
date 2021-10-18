import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  factorChartData(data) {
    return Object.keys(data).map((el) => {
      return {
        country: el,
        area: data[el],
      };
    });
  }

  render() {
    let chartData = this.props.data;
    chartData = this.factorChartData(chartData);
    console.log(chartData);

    return (
      <Paper>
        <Chart data={chartData}>
          <PieSeries
            valueField='area'
            argumentField='country'
            label={true}
          ></PieSeries>
          <Legend
            visible={true}
            horizontalAlignment={'left'}
            verticalAlignment={'bottom'}
            margin={0}
          />

          <Title text='Land Cover Classification' />
          <Animation />
          <Tooltip enabled={true} shared={true} />
          {/* <Chart.Label>label</Chart.Label> */}
        </Chart>
      </Paper>
    );
  }
}
