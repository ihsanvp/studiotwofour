declare module "@ioc:Adonis/Core/Request" {
  interface RequestContract {
    buildAbsoluteUri(path: string): string;
  }
}
