import { labels } from "./labelsData";

const getLabels = lang => {
  if (lang === "eng") return labels.eng;
  if (lang === "por") return labels.por;
  if (lang === "swa") return labels.swa;
  if (lang === "fre") return labels.fre;
};

export default getLabels;
