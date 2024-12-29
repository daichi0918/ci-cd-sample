import React from "react";

import { HelloUniverseLabel } from "../components/hello-universe-label";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Hello Galaxy</h1>
          <HelloUniverseLabel />
        </div>
      </div>
    </main>
  );
}
