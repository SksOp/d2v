import { useMemo, useState } from "react";
import {
  ALLSURVEYINSTITUTES,
  DURATIONFILTER,
  SURVEYINSTITUTES,
  UICONFIG,
} from "../constants/ui-config";

import { Button, Stack } from "@mui/material";
import { Selector } from "../components/selector";
import { useSurveyChart } from "../hooks/useSurveyChart";
import { DATA } from "../constants/chart-data";
import { SurveyInstituesName, ValuesName } from "../types/survey";
import { getAllPartyInfoKeys } from "../utils/survey";
import { SurveyLineChart } from "../components/survey-line-chart";

export function SurveySections() {
  const durations = DURATIONFILTER.map((d) => d.value);

  const [period, setPeriod] = useState(durations[0]);

  const [surveyinstitute, setSurveyinstitute] = useState<
    "institute" | SurveyInstituesName
  >("institute");

  const { toogleValueDisplay, visibleValues, chart } = useSurveyChart(
    DATA,
    surveyinstitute,
    period
  );
  return (
    <Stack gap={1.2} p={1.3} py={5.2}>
      <Selector
        items={durations}
        value={period}
        onChange={setPeriod}
        render={(value) => DURATIONFILTER.find((d) => d.value === value)?.title}
      />

      <Selector
        items={["institute", ...ALLSURVEYINSTITUTES]}
        value={surveyinstitute}
        onChange={setSurveyinstitute}
        render={(value) => {
          if (value === "institute") return "Institute";
          return SURVEYINSTITUTES[value].title;
        }}
      />
      <Stack sx={{ width: "100%" }}>
        <RenderPartyInfo
          toggle={toogleValueDisplay}
          visibleValues={visibleValues}
        />
        {chart && (
          <SurveyLineChart
            series={chart}
            options={{
              chart: {
                height: 350,
                zoom: {
                  enabled: false,
                },
              },
            }}
          />
        )}
      </Stack>
    </Stack>
  );
}

function RenderPartyInfo({
  toggle,
  visibleValues,
}: {
  toggle: (v: Exclude<ValuesName, "bsw">) => void;
  visibleValues: ValuesName[];
}) {
  const partyInfoKeys = useMemo(() => getAllPartyInfoKeys(), []);

  return (
    <Stack direction={"row"} width="100%" gap={2} mt={1}>
      {partyInfoKeys.map((key) => {
        const isVisible = visibleValues.includes(key);
        return (
          <Button
            key={key}
            onClick={() => toggle(key)}
            sx={{
              bgcolor: isVisible ? "#f1f1f1" : "#c8c8c8",
              width: "min-content",
              height: "40px",
              p: 1.2,
              px: 0.5,
              color: "black",
              borderRadius: 0,
              borderLeft: isVisible
                ? `3px solid ${UICONFIG.partyInfo.partyInfo[key]?.color}`
                : "3px solid #868686",
              ":hover": {
                bgcolor: isVisible ? "#f1f1f1" : "#c8c8c8",
              },
            }}
          >
            {UICONFIG.partyInfo.partyInfo[key]?.name}
          </Button>
        );
      })}
    </Stack>
  );
}
