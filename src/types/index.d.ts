export type Landings = {
  frontmatter: {
    title: string;
    colored_title: string;
    description: string;
  };
  content: string;
  slug?: string;
};