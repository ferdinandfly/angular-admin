/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface MenuNode {
    name: string;
    relativePath?: string;
    children?: MenuNode[];
  }

  /** Flat node with expandable and level information */
  interface FlatMenuNode {
    expandable: boolean;
    name: string;
    path: string;
    level: number;
  }
