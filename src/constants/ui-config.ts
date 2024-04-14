import { SurveyInstitues, ValueRelatedType } from "../types/survey";

const SURVEYINSTITUTES: SurveyInstitues = {
  fgw: {
    info: "FG Wahlen / ZDF",
    title: "Forschungsgruppe Wahlen",
  },
  forsa: {
    info: "forsa / Stern / RTL",
    title: "Forsa",
  },
  infra: {
    info: "infratest dimap / ARD",
    title: "Infratest dimap",
  },
  kantar: {
    info: "Kantar / BamS",
    title: "Kantar",
  },
  insa: {
    info: "INSA / Bild",
    title: "Insa",
  },
};

// for now I am excluding the other colors as we don't need them
const PARTYINFO: ValueRelatedType<{ color: string; name: string }> = {
  afd: {
    color: "#95C5E0",
    name: "AfD",
  },
  cdu_csu: {
    color: "#000000",
    name: "Union",
  },
  fdp: {
    color: "#FFE17F",
    name: "FDP",
  },
  gruene: {
    color: "#009456",
    name: "Grüne",
  },
  linke: {
    color: "#D04E84",
    name: "Linke",
  },
  spd: {
    color: "#F15B67",
    name: "SPD",
  },
};

const asset_url =
  "https://assets.graphic-portal.com/spaces/-Ns4Y6W9ApHcBTBEzu9S/graphics/-NsNham4iKudej0xLINo/versions/-NsNhi7ANB5ZktQHydB2/main";

export const UICONFIG = {
  headline: "Sonntagsfragen zur Bundestagswahl",
  headlineIcon: `${asset_url}/bundestag.png`,
  monthNamesLong: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "Aug.",
    "Sept.",
    "Okt.",
    "Nov.",
    "Dez.",
  ],
  partyInfo: {
    partyInfo: { ...PARTYINFO },
    surveyInstitutes: { ...SURVEYINSTITUTES },
  },
  footerline: "Infratest dimap, Forsa, Forschungsgruppe Wahlen, Kantar, Insa",
  footerlineIcon: `${asset_url}/logo.svg`,
};
