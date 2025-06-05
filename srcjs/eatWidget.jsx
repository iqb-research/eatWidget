import AngleChart from "./modules/AngleChart";
import ErrorChart from "./modules/ErrorChart";
import RangeChart from "./modules/RangeChart";
import BarChart from "./modules/BarChart";
import GeoGebra from "./modules/GeoGebra";
import GeoGebraPure from "./modules/GeoGebraPure";
import Calculation from "./modules/Calculation";
import CodingBox from "./modules/CodingBox";

import { reactWidget } from "reactR";

reactWidget("eatWidget", "output", {
  AngleChart: AngleChart,
  ErrorChart: ErrorChart,
  BarChart: BarChart,
  GeoGebra: GeoGebra,
  GeoGebraPure: GeoGebraPure,
  Calculation: Calculation,
  CodingBox: CodingBox,
  RangeChart: RangeChart,
});
