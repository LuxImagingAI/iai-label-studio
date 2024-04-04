import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'

const font = fetch("https://humansignal.com/fonts/Hellix-SemiBold.ttf")
.then(
  (res) => res.arrayBuffer(),
);

const openSourceBackground = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAYAAABPQHtcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACd2SURBVHgB7d1BbFz3feDxP7U+2OmutMYmC2xRMmiwu0BTCQbsokAlw1gvAmxFIxujQVFSazg9WfbKSk+SHUt7iuTY0mG7lR1LvtlNRebQrgNHZA5pVRikTo0Cr6gWiwI5kEEvdmFIRWIDtcTO74mPGj6+IYciKf4sfj7AwCJn5r03740P/OL//7+BGzc+nS8AAAAAkNSOAgAAAACJCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAABAATITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAA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')`

const enterpriseBackground = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAYAAABPQHtcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACfLSURBVHgB7d1NbF3nmdjx14k9RoyKrJ0ZzKQNOTOLDDAVCY8VFBiYghENUGBE1413Jg03XrSw7LGVnSTbUnaSP6RdaFuigC7iGiKzcxBY2tWZQBQ6U0SNS3pReDEumSIzBRKUdJHAcQD3Poc8zOXhJXkpfj0Sfz/gQryf59xzz0Z/vO977nrg/gOfFwAAAABI6gsFAAAAABITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAAAgNQELAAAAgNQELAAAAABSE7AAAAAASE3AAgAAACA1AQsAAACA1AQsAAAAAFITsAAAAABITcACAAAAIDUBCwAAAIDUBCwAAAAAUhOwAAAAAEhNwAIAAIACZCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqABQAAAEBqAhYAAAAAqQlYAAAAAKQmYAEAAACQmoAFAAAAQGoCFgAAAACpCVgAAAAApCZgAQAAAJCagAUAAABAagIWAAAAAKkJWAAAAACkJmABAAAAkJqA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')`

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "";
  const themeParam = searchParams.get("theme") || undefined;
  let category = searchParams.get("category") || "Docs";
  category = category === "guide" ? "docs" : category;

  const theme = themeParam || req.url.includes("humansignal.com") ? "enterprise" : "opensource";
  
  const fontData = await font;

    return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: '55px',
          paddingLeft: '70px',
          background: theme === "enterprise" ? enterpriseBackground : openSourceBackground
        }}
      >
        <p style={{
          fontSize: "22px",
          color: "#E37BD3",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          borderRadius: "6px",
          backgroundColor: theme === "enterprise" ? "#262522" : "none",
          border: theme === "enterprise" ? "none" : "1.5px #E37BD3 solid",
          padding: "6px 12px"
        }}>{category}</p>
        <h1
          style={{
          fontSize: '74px',
          fontFamily: "Hellix",
          maxWidth: '700px',
          lineHeight: '80px',
          color: theme === "enterprise" ? "#fff" : "#12110D" 
        }}>
          {title && decodeURI(title)}
        </h1>
      </div>
    ),
    {
      fonts: [
        {
          name: "Hellix",
          data: fontData,
          style: "normal",
          weight: 600
        },
        
      ],
    }
  )
}

export const config = {
  path: "/open-graph-image",
  onError: "/images/og-default-ls.png",
  cache: "manual",
};
