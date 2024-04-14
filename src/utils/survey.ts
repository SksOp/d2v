import { DurationFilter, UICONFIG } from "../constants/ui-config";
import { Data, SurveyInstituesName, ValuesName } from "../types/survey";

export const getAllPartyInfoKeys = () => {
  const partyInfoKeys = Object.keys(UICONFIG.partyInfo.partyInfo) as Exclude<
    ValuesName,
    "bsw"
  >[];
  return partyInfoKeys;
};

export const transformToDataPoints = (
  data: Data[],
  visibleValues: Exclude<ValuesName, "bsw">[],
  selectedSurveyInstitute: SurveyInstituesName | "institute",
  selectedPeriod: DurationFilter["value"]
) => {
  console.log(selectedSurveyInstitute);
  const seriesMap: {
    [key in Exclude<ValuesName, "bsw">]?: {
      name: string;
      color: string;
      data: [number, number][];
    };
  } = {};

  // Initialize series data structure
  visibleValues.forEach((value) => {
    seriesMap[value] = {
      name: value,
      data: [],
      color: UICONFIG.partyInfo.partyInfo[value].color,
    };
  });

  // Populate series data with coordinates
  data.forEach((entry) => {
    visibleValues.forEach((value) => {
      const seriesData = seriesMap[value];
      if (seriesData) {
        if (!filterPeriod(entry.date, selectedPeriod)) return null;
        if (
          selectedSurveyInstitute !== "institute" &&
          entry.source !== selectedSurveyInstitute
        )
          return null;
        seriesData.data.push([
          parseDateToTimestamp(entry.date),
          entry.values[value],
        ]);
      }
    });
  });

  // Extract the series array from the map
  const seriesArray = Object.values(seriesMap).filter(
    (series) => series !== undefined
  ) as {
    name: string;
    data: [number, number][];
  }[];
  return seriesArray;
};

const parseDateToTimestamp = (dateStr: string): number => {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
};

const filterPeriod = (
  date: string,
  selectedPeriod: DurationFilter["value"]
) => {
  switch (selectedPeriod) {
    case "since2020":
      return true;
    case "2021":
      return date.endsWith("2021");
    case "2022":
      return date.endsWith("2022");
    case "2023":
      return date.endsWith("2023");
    case "last12Months":
      return (
        parseDateToTimestamp(date) >
        new Date().getTime() - 1000 * 60 * 60 * 24 * 365
      );
  }
};
