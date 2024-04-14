import { useCallback, useEffect, useMemo, useState } from "react";
import { DurationFilter } from "../constants/ui-config";
import { Data, SurveyInstituesName, ValuesName } from "../types/survey";
import { getAllPartyInfoKeys, transformToDataPoints } from "../utils/survey";

export function useSurveyChart(
  data: Data[],
  selectedInstitute: SurveyInstituesName | "institute",
  selectedPeriod: DurationFilter["value"]
) {
  const partyInfoKeys = useMemo(() => getAllPartyInfoKeys(), []);

  const [visibleValues, setVisibleValues] =
    useState<Exclude<ValuesName, "bsw">[]>(partyInfoKeys);

  const toogleValueDisplay = useCallback((v: Exclude<ValuesName, "bsw">) => {
    setVisibleValues((prev) => {
      if (prev.includes(v)) {
        return prev.filter((value) => value !== v);
      }
      return [...prev, v];
    });
  }, []);

  const [chart, setChart] = useState<ApexAxisChartSeries>();

  useEffect(() => {
    setChart(
      transformToDataPoints(
        data,
        visibleValues,
        selectedInstitute,
        selectedPeriod
      )
    );
  }, [data, selectedInstitute, selectedPeriod, visibleValues]);
  return {
    toogleValueDisplay,
    visibleValues,
    chart,
  };
}
