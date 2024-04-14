export type Data = {
  date: string;
  source: SurveyInstituesName;
  values: {
    [K in Exclude<ValuesName, "bsw">]: number;
  } & {
    bsw?: number;
  };
};

export type ValuesName =
  | "afd"
  | "bsw"
  | "cdu_csu"
  | "fdp"
  | "gruene"
  | "linke"
  | "spd";

export type ValueRelatedType<V> = {
  [key in Exclude<ValuesName, "bsw">]: V;
};

export type SurveyInstituesName = "forsa" | "insa" | "fgw" | "infra" | "kantar";

export type SurveyInstitues = {
  [key in SurveyInstituesName]: {
    info: string;
    title: string;
  };
};
