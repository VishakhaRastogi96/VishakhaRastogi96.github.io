import { LoaderFunction, json } from "@remix-run/node";

export let loader: LoaderFunction = () => {
  return json(
    {
      short_name: "cloudLibrary",
      name: "cloudLibrary",
      prefer_related_applications: true,
      related_applications: [
        {
          platform: "play",
          url: "https://play.google.com/store/apps/details?id=com.txtr.android.mmm",
          id: "com.txtr.android.mmm",
        },
      ],
      icons: [
        {
          src: "/cloudlibraryIcon.jpeg",
          sizes: "225x225",
          type: "image/png",
          density: "0.75",
        },
      ],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    }
  );
};
