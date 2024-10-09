import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <LiveReload />
        <h1>Kanvas Trekking</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
