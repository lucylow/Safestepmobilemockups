import { createBrowserRouter } from "react-router";
import { Onboarding } from "./screens/Onboarding";
import { Home } from "./screens/Home";
import { AILoading } from "./screens/AILoading";
import { ARView } from "./screens/ARView";
import { Arrival } from "./screens/Arrival";
import { Mint } from "./screens/Mint";
import { Profile } from "./screens/Profile";
import { DataSources } from "./screens/DataSources";
import { Cover } from "./screens/Cover";
import { CriteriaEvidence } from "./screens/CriteriaEvidence";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Cover,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/ai-loading",
    Component: AILoading,
  },
  {
    path: "/ar-view",
    Component: ARView,
  },
  {
    path: "/arrival",
    Component: Arrival,
  },
  {
    path: "/mint",
    Component: Mint,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/data-sources",
    Component: DataSources,
  },
  {
    path: "/criteria-evidence",
    Component: CriteriaEvidence,
  },
]);