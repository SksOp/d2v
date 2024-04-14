import { useState } from "react";
import {
  ALLSURVEYINSTITUTES,
  DURATIONFILTER,
  SURVEYINSTITUTES,
} from "../constants/ui-config";

import { Box, Stack } from "@mui/material";
import { Selector } from "../components/selector";

export function SurveySections() {
  const durations = DURATIONFILTER.map((d) => d.value);
  const [period, setPeriod] = useState(durations[0]);

  const [surveyinstitute, setSurveyinstitute] = useState(
    ALLSURVEYINSTITUTES[0]
  );
  return (
    <Stack gap={1} p={1.3} py={5.2}>
      <Selector
        items={durations}
        value={period}
        onChange={setPeriod}
        render={(value) => DURATIONFILTER.find((d) => d.value === value)?.title}
      />

      <Selector
        items={ALLSURVEYINSTITUTES}
        value={surveyinstitute}
        onChange={setSurveyinstitute}
        render={(value) => SURVEYINSTITUTES[value].title}
      />
      {/*  assuming this box will be the graph */}
      <Box sx={{ height: "360px", width: "100%" }}></Box>
    </Stack>
  );
}
