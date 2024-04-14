import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface SurveyLineChartProps {
  options: ApexOptions;
  series: ApexAxisChartSeries;
}
export function SurveyLineChart(props: SurveyLineChartProps) {
  console.log(props.series);
  return (
    <Chart
      options={{
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          min: 0,
          max: 45,
        },
        ...props.options,
      }}
      series={props.series}
      type="line"
      width="100%"
    />
  );
}
