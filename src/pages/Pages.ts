import { BugsPage } from "./BugsPage";
import { FishPage } from "./FishPage";

export enum Page {
  bugs = "Bugs",
  fish = "Fish",
}

export const Pages: Record<Page, React.ComponentType<any>> = {
  [Page.bugs]: BugsPage,
  [Page.fish]: FishPage,
};
