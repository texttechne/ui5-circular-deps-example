import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace org.odata2ts.tst
 */
export default class Component extends UIComponent {
  public static metadata = {
    manifest: "json",
  };

  private contentDensityClass: string;

  public init(): void {
    // call the base component's init function
    super.init();

    // create the views based on the url/hash
    this.getRouter().initialize();
  }

  /**
   * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
   * design mode class should be set, which influences the size appearance of some controls.
   *
   * @public
   * @return {string} always css class 'sapUiSizeCozy'
   */
  public getContentDensityClass(): string {
    return "sapUiSizeCozy";
  }
}
