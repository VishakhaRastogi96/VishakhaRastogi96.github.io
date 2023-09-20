import {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
  json,
} from "@remix-run/node";
import { metaV1 } from "@remix-run/v1-meta";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React, { useEffect } from "react";
import { promptUserOnAndroid } from "./events.client";

export const meta: V2_MetaFunction = (args) => {
  return metaV1(args, {
    title: "Prompt",
  });
};

export const links: LinksFunction = () => {
  return [{ rel: "manifest", href: "/resources/manifest.json" }];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return json({});
};

export default function App() {
  useEffect(() => {
    promptUserOnAndroid();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=466446054" />

        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
