import "./styles.css";
import { AnalyticsProvider } from "@jasonmorganson/analytics/provider";
import { DesignSystemProvider } from "@jasonmorganson/design-system";
import { fonts } from "@jasonmorganson/design-system/lib/fonts";
import { Toolbar } from "@jasonmorganson/feature-flags/components/toolbar";
import type { ReactNode } from "react";

interface RootLayoutProperties {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html className={fonts} lang="en" suppressHydrationWarning>
    <body>
      <AnalyticsProvider>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </AnalyticsProvider>
      <Toolbar />
    </body>
  </html>
);

export default RootLayout;
