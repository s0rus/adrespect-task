declare module "macy" {
  interface MacyOptions {
    container: string;
    columns?: number;
    trueOrder?: boolean;
    margin?:
      | number
      | {
          x: number | string;
          y: number | string;
        };
    waitForImages?: boolean;
    useOwnImageLoader?: boolean;
    mobileFirst?: boolean;
    breakAt?: Record<string, number>;
    cancelLegacy?: boolean;
    useContainerForBreakpoints?: boolean;
  }

  class Macy {
    constructor(options: MacyOptions);
  }

  export = Macy;
}
