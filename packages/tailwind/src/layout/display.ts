/**
 * The `Display` tailwindcss classes.
 * @see https://tailwindcss.com/docs/display
 */
export type Display =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "table"
  | "inline-table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row-group"
  | "table-row"
  | "flow-root"
  | "grid"
  | "inline-grid"
  | "contents"
  | "list-item"
  | "hidden";

export interface WithDisplay {
  /**
   * The `Display` tailwindcss classes.
   * @see https://tailwindcss.com/docs/display
   */
  display?: Display;
}
