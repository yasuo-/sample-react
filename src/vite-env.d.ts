/// <reference types="vite/client" />

interface ImportViteEnv {
  readonly VITE_API_ENDPOINT: string;
}

interface ImportMetaEnv {
  readonly env: ImportViteEnv;
}
