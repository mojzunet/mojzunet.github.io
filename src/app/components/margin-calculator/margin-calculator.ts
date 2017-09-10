import { icons, iconReferences } from "../../services";
import { IReference } from "../content";
import { ITile, IRouteData } from "../home";

export const marginCalculatorPath = "margin-calculator";

export const marginCalculatorTile: ITile = {
  background: "tiles/margin-calculator.png",
  link: `/${marginCalculatorPath}`,
  title: "Margin Calculator",
  description: "Android margin and markup calculator application with currency conversion and optional discount.",
};

export const marginCalculatorRouteData: IRouteData = {
  title: "Margin Calculator",
};

export const marginCalculatorReferences: IReference[] = [
  {
    href: "https://github.com/mojzunet/MarginCalculator.app",
    icon: icons.github,
    text: "GitHub Repository",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.mojzunet.margincalculator",
    icon: icons.googlePlay,
    text: "Google Play",
  },
  iconReferences.reactNative,
  iconReferences.redux,
  iconReferences.reduxObservable,
  iconReferences.typescript,
];
