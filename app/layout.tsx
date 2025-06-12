import React from "react";
import { MantineProvider, ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./style.css";

export const metadata = {
  title: "Bob's Burgers API Documentation",
  description:
    "The Bob's Burgers API is a REST API based on the television show Bob's Burgers.",
  creator: "Zachary Spielberger",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider>
          <Notifications />
          {children}
        </MantineProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
