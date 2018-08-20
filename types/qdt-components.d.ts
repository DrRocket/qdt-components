/// <reference types="@types/qlik-engineapi" />
/// <reference types="@types/qlik-visualizationextensions" />

declare module 'qdt-components' {
  /**
   * Qlik-powered components built by the Qlik Demo Team. For use with simple html, Angular6, React 16 and Vue 2
   */
  export default class QdtComponents {
    constructor(config: QdtConfig, connections?: QdtConnections);

    /**
     * If `QdtComponents` is configured to do so, will resolve to a
     * Capabilities API App instance.
     */
    qAppPromise: Promise<AppAPI.IApp> | null;

    /**
     * If `QdtComponents` is configured to do so, will resolve to a Engine
     * API App instance as implemented by `engima.js`
     */
    qDocPromise: Promise<EngineAPI.IApp> | null;

    render(
      type: 'QdtViz',
      props: QdtVizProps,
      HTMLElement
    ): Promise<QdtInstance>;
    render(
      type: 'QdtCurrentSelections',
      props: QdtCurrentSelectionsProps,
      HTMLElement
    ): Promise<QdtInstance>;
    // TODO, fill out the rest of the types
    render(
      type: string,
      props: any,
      element: HTMLElement
    ): Promise<QdtInstance>;
  }

  export type QdtComponentType =
    | 'QdtViz'
    | 'QdtFilter'
    | 'QdtCurrentSelections'
    | 'QdtSelectionToolbar'
    | 'QdtTable'
    | 'QdtKpi'
    | 'QdtButton'
    | 'QdtPicasso'
    | 'QdtSearch';

  interface QdtInstance {
    /**
     * Will clean up the QdtInstance by unsubscribing from and/or destroying
     * any Qlik Objects created by the render. Essential when used in a view
     * library with lifecycles, such as `Angular`, `React`, etc... See
     * `ngOnDestroy` and `componentWillUnmount` in those two named libraries
     * respectively, which allow you to clean up just before the component
     * wrapping around Qdt-Components destroys the DOM node the
     * QdtInstance is occupying.
     */
    unmount(): void;
  }

  export interface QdtConnections {
    /**
     * If true QdtComponent will init a connection to the Qlik Server via the
     * Capabilities API. It will directly modify the <head></head> tag to
     * include css, fonts, and necessary javascript from the Qlik Server. Qlik
     * Sense Desktop or Qlik Sense Server only.
     */
    vizApi: boolean;
    /**
     * If true QdtComponent will init a connection to the Qlik Server via
     * enigma.js, a lightweight `Promise` based implementation of the Engine
     * APIs. Works on Qlik Sense Desktop, Qlik Sense Server, and Qlik Core.
     */
    engineApi: boolean;
    /**
     * If set to a non-empty string will use that string in the `WebSocket` url
     * path as /identity/:sessionID. Otherwise, will have an identity path with
     * a randomly generated string. Closest thing to docs:
     * https://github.com/qlik-oss/enigma.js/blob/master/src/sense-utilities.js#L16
     */
    useUniqueSessionID?: string;
  }

  export interface QdtConfig {
    /**
     * Qlik Server hostname
     */
    host: string;
    /**
     * If true, then uses wss:// instead of ws://
     */
    secure: boolean;
    /**
     * Port number for Qlik Server. For sense desktop its typically `4848`, and
     * Server and Core is typically `443` or `80`
     */
    port: number;
    /**
     * Config for Qlik proxy. If your Qlik server is using a proxy this prefixes
     * the websocket url path with the proxy path. Use empty string in most cases.
     */
    prefix: string;
    /**
     * Id for Qlik App. On Sense Desktop its the filename, whereas on Server or
     * Core it is a UUID/GUID that is generated by the server at App creation
     * or App publish time
     */
    appId: string;
  }

  export interface QdtProps {
    /**
     * CSS width property value. e.g. "100px". Default "100%"
     */
    width?: string;
    /**
     * CSS height property value. e.g. "100px". Default "100%"
     */
    height?: string;
  }

  export interface QdtVizProps extends QdtProps {
    id?: string;
    type?: string;
    cols?: any[];
    options?: any;
  }

  export interface QdtCurrentSelectionsProps extends QdtProps {}
}