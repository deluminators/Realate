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


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data:[]
    };
  }

  factorChartData(data) {
    return Object.keys(data).map((el) => {
      return {
        landType: el,
        amount: data[el],
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
            valueField='amount'
            argumentField='landType'
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
        </Chart>
      </Paper>
    );
  }
}
