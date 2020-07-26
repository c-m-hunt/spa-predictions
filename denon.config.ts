import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    startServer: {
      cmd: "denon run -A --unstable server.ts",
      desc: "run my server.ts file",
    },
    startApp: {
      cmd: "denon run -A --unstable index.ts",
      desc: "run my index.ts file",
    },
  },
};

export default config;
