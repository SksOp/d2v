import { DurationFilter } from "../constants/ui-config";
import { Data, SurveyInstituesName } from "../types/survey";

export function useSurveyChart(
  data: Data[],
  selectedInstitute: SurveyInstituesName,
  selectedPeriod: DurationFilter["value"]
) {
  console.log(data, selectedInstitute, selectedPeriod);
}
