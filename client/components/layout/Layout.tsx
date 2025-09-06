import { PropsWithChildren } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <SiteHeader />
      <main id="main" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
