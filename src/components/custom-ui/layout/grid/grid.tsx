//Component Name : Grid
"use client";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { ILayouts } from "./interfaces/grid";

const ResponsiveGridLayout = WidthProvider(Responsive);

{
  /* Section 1: IGridProps Interface */
}
interface IGridProps {
  layouts: ILayouts;
  breakpoints: { [key: string]: number };
  cols: { [key: string]: number };
  children: React.ReactNode;
  rowHeight: number;
}

{
  /* Section 2: Grid Component */
}
const Grid: React.FC<IGridProps> = ({
  layouts,
  breakpoints,
  cols,
  children,
  rowHeight,
}) => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={breakpoints}
      cols={cols}
      rowHeight={rowHeight}
      isDraggable={false}
    >
      {children}
    </ResponsiveGridLayout>
  );
};

export default Grid;

/**
 * =====================================================================
 * ORIGINAL DOCUMENTATION (Attach to bottom of the component code block)
 * =====================================================================
 * File Name : grid.tsx
 * Component Name : Grid
 * Component Type : Functional Component
 * Date Created : 2024-05-29
 * Developer Name : Aniket Raj
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer : To provide a responsive grid layout component using the react-grid-layout library.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer : This component renders a responsive grid layout using the react-grid-layout library.
 * It accepts the grid configuration (layouts, breakpoints, cols) and grid items (children) as props and arranges them in a responsive grid.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: IGridProps Interface
 * This section defines the IGridProps interface, which specifies the props that the Grid component expects to receive.
 * The props include layouts, breakpoints, cols, children, and rowHeight.
 *
 * Section 2: Grid Component
 * This section defines the Grid component, which is a functional component that renders the ResponsiveGridLayout from the react-grid-layout library.
 * It passes the necessary props to the ResponsiveGridLayout component, including layouts, breakpoints, cols, and rowHeight.
 * The children prop represents the grid items that will be placed inside the grid layout.
 *
 * ------------------------------
 * Input Comments:
 * - layouts: An object specifying the grid layout configuration for different breakpoints.
 * - breakpoints: An object specifying the breakpoint values for different screen sizes.
 * - cols: An object specifying the number of columns for different screen sizes.
 * - children: The grid items to be rendered within the grid layout.
 * - rowHeight: The height of each row in the grid layout.
 *
 * ------------------------------
 * Output Comments:
 * The component renders a responsive grid layout using the react-grid-layout library, with the provided configuration and grid items.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer : No, the code follows the standard usage of the react-grid-layout library to create a responsive grid layout component.
 *
 */
