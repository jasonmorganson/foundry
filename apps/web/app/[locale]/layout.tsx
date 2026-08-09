import "./styles.css";
import { AnalyticsProvider } from "@jasonmorganson/analytics/provider";
import { Toolbar as CMSToolbar } from "@jasonmorganson/cms/components/toolbar";
import { DesignSystemProvider } from "@jasonmorganson/design-system";
import { fonts } from "@jasonmorganson/design-system/lib/fonts";
import { cn } from "@jasonmorganson/design-system/lib/utils";
import { Toolbar } from "@jasonmorganson/feature-flags/components/toolbar";
import { getDictionary } from "@jasonmorganson/internationalization";
import type { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

interface RootLayoutProperties {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
}

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      className={cn(fonts, "scroll-smooth")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AnalyticsProvider>
          <DesignSystemProvider>
            <Header dictionary={dictionary} />
            {children}
            <Footer />
          </DesignSystemProvider>
          <Toolbar />
          <CMSToolbar />
        </AnalyticsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
