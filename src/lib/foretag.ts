// Enda källan till företagsuppgifter. Allt på sajten (sidfot, kontakt, integritetspolicy,
// meta-data) läser härifrån.
//
// Fält med tomt värde (e-post, öppettider) visas inte på sajten förrän de fylls i.
export const FORETAG: {
  namn: string;
  kortnamn: string;
  ort: string;
  omrade: string;
  startar: number;
  anstallda: string;
  orgnr: string;
  gata: string;
  postnummer: string;
  adress: string;
  telefon: string;
  telefonLank: string;
  epost: string;
  oppettider: readonly { dagar: string; tid: string }[];
  personer: readonly { namn: string; roll: string }[];
} = {
  namn: "Jovos Transport AB",
  kortnamn: "Jovos",
  ort: "Göteborg",
  omrade: "Göteborg",
  startar: 1995,
  anstallda: "ca 12",
  orgnr: "556521-4862",
  gata: "Björnväktarens Gata 25",
  postnummer: "415 51",
  adress: "Björnväktarens Gata 25, 415 51 Göteborg",
  telefon: "031-48 26 33",
  telefonLank: "+4631482633",
  epost: "",
  oppettider: [],
  personer: [
    { namn: "Jovo Marinkovic", roll: "Styrelseledamot" },
    { namn: "Ilija Marinkovic", roll: "Styrelsesuppleant" },
  ],
};
