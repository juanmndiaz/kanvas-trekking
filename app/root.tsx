import './root.css';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'stylesheet' },
];

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
        <h1 className="text-red-600">Kanvas Trekking</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
