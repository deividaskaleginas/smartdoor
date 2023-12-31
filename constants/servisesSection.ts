import { ServisesType } from "@/types/servisesType";

import checkMark from "../public/assets/icons/check.svg";

//Cyfral
import cyfralCCD2094M from "../public/assets/images/telefonspynes/CYFRAL-CCD2094.jpg";
import cyfralCCD2094 from "../public/assets/images/telefonspynes/CYFRAL-CCD2094.jpeg";
import cyfralPC1000DE from "../public/assets/images/telefonspynes/CYFRAL-PC1000DE.jpeg";
import cyfral from "../public/assets/images/telefonspynes/CYFRAL.png";

//Laskomex
import laskomexRainman from "../public/assets/images/telefonspynes/Laskomex-RAINMAN.png";

//Vizit
import vizitBVDN100 from "../public/assets/images/telefonspynes/VIZIT-BVD-N100.png";
import vizitBVD431 from "../public/assets/images/telefonspynes/VIZIT-BVD-431.jpeg";
import vizitBVD342 from "../public/assets/images/telefonspynes/VIZIT-BVD-342.png";
import vizitBVD311 from "../public/assets/images/telefonspynes/VIZIT-BVD-311.png";

//Farfisa
import farfisa from "../public/assets/images/telefonspynes/farfisa.png";
import farfisaTD6000 from "../public/assets/images/telefonspynes/Farfisa-TD6000.png";
import farfisaDF600 from "../public/assets/images/telefonspynes/Farfisa-DF600.png";

//Proel
import proel1 from "../public/assets/images/telefonspynes/Proel1.png";
import proel2 from "../public/assets/images/telefonspynes/Proel2.png";

import eltis from "../public/assets/images/telefonspynes/Eltis.png";
import dd5000 from "../public/assets/images/telefonspynes/DD5000.png";

//Keys
import ultionKey from "../public/assets/images/sliders/raktas-1.png";
import key from "../public/assets/images/sliders/raktas.png";
import key2 from "../public/assets/images/sliders/raktas2.png";
import motturaKey from "../public/assets/images/sliders/mottura.jpeg";
import assa2Key from "../public/assets/images/sliders/assa2.jpeg";
import assaKey from "../public/assets/images/sliders/assa1.jpeg";
import pultelisRD from "../public/assets/images/sliders/pultelisRD.png";
import pultelis from "../public/assets/images/sliders/pultelis1.jpeg";

export const ServisesSectionData: ServisesType[] = [
  {
    title: "Telefonspynių remontas",
    description:
      "Kokybiškas telefonspynių, vaizdo telefonspynių, bet kokio sudėtingumo įeigos kontrolės remontas.",
    path: "/paslaugos/telefonspyniu-remontas",
  },
  {
    title: "Spynų remontas",
    description: "Remontuojame ir keičiame visų gamintojų spynas.",
    path: "/paslaugos/spynu-remontas",
  },
  {
    title: "Durų remontas",
    description:
      "Metalinių (šarvuotų ), PVC, aliumininių, stiklo durų remontas.",
    path: "/paslaugos/duru-remontas",
  },
  {
    title: "Kopijavimas",
    description: "Mechaninių raktų, el. raktų ir vartų pultelių kopijavimas",
    path: "/paslaugos/kopijavimas",
  },
  {
    title: "Suvirintojo paslaugos",
    description: "Mobilaus suvirintojo paslaugos",
    path: "/paslaugos/suvirintojo-paslaugos",
  },
];

export const TelefonspyniuRemontasData = [
  {
    title: "Sugedo telefonspynė?",
  },
  {
    title: "Neveikia Vaizdo kamera?",
  },
  {
    title: "Nerodo Vaizdo monitorius?",
  },
  {
    title: "Nelaiko elektromagnetas ar elektrosklendė?",
  },
  {
    title: "Sugedo ar išsiderino durų pritraukiklis, trankosi durys?",
  },
  {
    title: "Nesuveikia durų atrakinimo kodas?",
  },
  {
    title: "Neveikia elektroniniai TM raktai ar RFiD kortelės?",
  },
  {
    title: "Reikalinga elektroninio rakto kopija?",
  },
  {
    title: "Jūsų bute neįrengtas ragelis?",
  },
];

export const TelefonspynesModelsData = [
  {
    image: cyfralCCD2094M,
    alt: "Telefonspynė `Cyfral CCD2094.1M`",
    brand: "Cyfral",
    model: "CCD2094.1M (Rusija)",
  },
  {
    image: cyfralCCD2094,
    alt: "Telefonspynė `Cyfral CCD2094`",
    brand: "Cyfral",
    model: "CCD2094 (Rusija)",
  },
  {
    image: cyfralPC1000DE,
    alt: "Telefonspynė `Cyfral PC1000DE`",
    brand: "Cyfral",
    model: "PC1000DE",
  },
  {
    image: cyfral,
    alt: "Telefonspynė `Cyfral`",
    brand: "Cyfral",
    model: "Tiesioginio iškvietimo",
  },
  {
    image: laskomexRainman,
    alt: "Telefonspynė `Laskomex Rainman`",
    brand: "Laskomex",
    model: "RAINMAN (Lenkija)",
  },
  {
    image: vizitBVDN100,
    alt: "Telefonspynė `Vizit BVD N100`",
    brand: "Vizit",
    model: "BVD N100",
  },
  {
    image: vizitBVD431,
    alt: "Telefonspynė `Vizit BVD 431`",
    brand: "Vizit",
    model: "BVD 431",
  },
  {
    image: vizitBVD342,
    alt: "Telefonspynė `Vizit BVD 342`",
    brand: "Vizit",
    model: "BVD 342",
  },
  {
    image: vizitBVD311,
    alt: "Telefonspynė `Vizit BVD 311`",
    brand: "Vizit",
    model: "BVD 311",
  },
  {
    image: farfisa,
    alt: "Telefonspynė `Farfisa`",
    brand: "Farfisa",
    model: "Tiesioginio iškvietimo",
  },
  {
    image: farfisaTD6000,
    alt: "Telefonspynė `Farfisa TD6000`",
    brand: "Farfisa",
    model: "TD6000, skaitmeninė",
  },
  {
    image: farfisaDF600,
    alt: "Telefonspynė `Farfisa DF600`",
    brand: "Farfisa",
    model: "DF600",
  },
  {
    image: proel1,
    alt: "Telefonspynė `Proel` modelis 1",
    brand: "Proel",
    model: "Modelis 1 (Lenkija)",
  },
  {
    image: proel2,
    alt: "Telefonspynė `Proel` modelis 2",
    brand: "Proel",
    model: "Modelis 2 (Lenkija)",
  },
  {
    image: eltis,
    alt: "Telefonspynė `Eltis DP 400TD22`",
    brand: "Eltis",
    model: "DP 400TD22",
  },
  {
    image: dd5000,
    alt: "Telefonspynė `DD5000`",
    brand: "DD5000",
    model: "DD5000",
  },
];

export const SpynuRemontasData = [
  {
    icon: checkMark,
    description: "Avarinis spynų atrakinimas",
  },
  {
    icon: checkMark,
    description: "Spynų montavimas į visų rūšių duris, vartus, garažų vartus",
  },
  {
    icon: checkMark,
    description: "Spynų perkodavimas ir cilindrų keitimas",
  },
  {
    icon: checkMark,
    description: "Cilindrų restauracija",
  },
  {
    icon: checkMark,
    description: "Rankenų remontas ir keitimas",
  },
  {
    icon: checkMark,
    description: "Sisteminių cilindrų gamyba",
  },
  {
    icon: checkMark,
    description: "Elektromagnetų ir sklendžių montavimas",
  },
  {
    icon: checkMark,
    description:
      "Durų pritraukėjų remontas, permontavimas, montavimas, reguliavimas",
  },
  {
    icon: checkMark,
    description: "Akutės įrengimas",
  },
  {
    icon: checkMark,
    description: "Spynos apsaugos padidinimas",
  },
];

export const DuruRemontasData = [
  {
    icon: checkMark,
    description:
      "Metalinių (šarvuotų ), PVC, aliumininių, stiklo durų remontas",
  },
  {
    icon: checkMark,
    description: "Spynų montavimas ir keitimas",
  },
  {
    icon: checkMark,
    description: "Apdailos plokščių keitimas ir remontas",
  },
  {
    icon: checkMark,
    description: "Durų montavimas, perkėlimas",
  },
  {
    icon: checkMark,
    description: "Durų angos praplatinimas",
  },
  {
    icon: checkMark,
    description: "Suvirinimo darbai ( lankstų, rėmo … )",
  },
  {
    icon: checkMark,
    description: "Pritraukėjų montavimas, remontas, keitimas",
  },
  {
    icon: checkMark,
    description: "Elektromechaninių spynų montavimas",
  },
  {
    icon: checkMark,
    description: "Durų atnaujinimas – dažymas, tarpinių keitimas, apšiltinimas",
  },
  {
    icon: checkMark,
    description: "Stiklo paketų keitimas",
  },
  {
    icon: checkMark,
    description: "Ribotuvų montavimas",
  },
  {
    icon: checkMark,
    description: "Apdailos, apvadų parinkimas ir montavimas",
  },
  {
    icon: checkMark,
    description: "Angokraščių tinkavimas po durų sumontavimo",
  },
];

export const SuvirintojoPaslaugosData = [
  {
    icon: checkMark,
    description: "Mobilaus suvirintojo paslauga",
  },
  {
    icon: checkMark,
    description: "Metlalinių durų lankstų virinimas",
  },
  {
    icon: checkMark,
    description: "Turėklų virinimas",
  },
  {
    icon: checkMark,
    description: "Vartų ir vartelių konstrukcijų remontas, virinimas",
  },
  {
    icon: checkMark,
    description: "Tvirtinimo elementų virinimas",
  },
  {
    icon: checkMark,
    description: "Spynos montavimo „dėžutės“ gamyba",
  },
  {
    icon: checkMark,
    description: "Smulkūs suvirinimo darbai",
  },
];

export const MechaniniuRaktuData = [
  {
    description: "Euro ruošinio raktas – 3€ su PVM",
  },
  {
    description: "ASSA ruošinio raktas – 5€ su PVM",
  },
  {
    description: "ASSA ruošinio raktas (12PIN) – 10€ su PVM",
  },
  {
    description: "Seifinio ruošinio raktas – nuo 12€ su PVM",
  },
  {
    description: "Seifinio ruošinio raktas (taškinis) – nuo 12€ su PVM",
  },
];

export const TelefonspyniuRaktuData = [
  {
    description:
      "El. rakto kopiją galima pasigaminti atvykus į būstinę arba išsikviečiant meistrą į vietą, rakto pagaminimas užtrunka kelias minutes",
  },
  {
    description:
      "El. Rakto (TM DALLAS, RFID) kopijos kaina: 3,00 EUR  (su PVM)",
  },
  {
    description: "El. Rakto (MIFARE) kopijos kaina: 5,00 EUR (su PVM)",
  },
  {
    description: "El. Rakto (HID) kopijos kaina: 10,00 EUR (su PVM)",
  },
  {
    description:
      "Meistro iškvietimas/atvykimas Vilniaus mieste nuo 30,00 EUR + PVM",
  },
  {
    description:
      "Dublikato pagaminimui reikalingas originalus el. raktas, tai gali būti Jūsų kaimyno el. raktas ar pan.",
  },
];

export const VartuPulteliuData = [
  {
    description:
      "Universalūs pulteliai, nekintamo arba kintamo kodo. Į šį pultelį galima įrašyti įvairius pultelius, kurių dažnis 433,92-869 Mhz.",
  },
  {
    description:
      "Tinka su šitų įmonių produkcija: Came, Proteco, BFT, Daspi, Marantec 433, Liftmaster433.",
  },
  {
    description: "Pultelio kopijos kaina nuo 20 EUR su PVM.",
  },
];

export const KeysSwiperData = [
  { image: ultionKey, alt: "`Ultion` durų spynos raktas" },
  { image: key, alt: "Durų spynos raktas" },
  { image: key2, alt: "Durų spynos raktas" },
  { image: motturaKey, alt: "`Mottura` durų spynos raktas" },
  { image: assa2Key, alt: "`Assa` durų spynos raktas" },
  { image: assaKey, alt: "`Assa` durų spynos raktas" },
  { image: pultelisRD, alt: "`Nuotolinis vartų pultelis" },
  { image: pultelis, alt: "`Nuotolinis vartų pultelis" },
];
