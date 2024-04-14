import Chart from "react-apexcharts";

type Series = {
  name: string;
  data: number[];
  color: string;
};

interface SurveyLineChartProps {
  options: ApexCharts.ApexOptions;
  series: Series[];
}
export function SurveyLineChart(props: SurveyLineChartProps) {
  return (
    <Chart
      options={props.options}
      series={props.series}
      type="line"
      width="100%"
    />
  );
}
