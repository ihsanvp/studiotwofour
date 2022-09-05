interface AuthConfig {
  key: string;
  storage: "localstorage" | "cookie";
}

const AUTH_CONFIG: AuthConfig = {
  key: "_auth",
  storage: "localstorage",
};

export default AUTH_CONFIG;
