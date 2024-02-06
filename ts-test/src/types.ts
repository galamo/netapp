type Book = {
  readonly title: string;
  pages: number;
  author: Author;
  publishedAt: string;
};

type Author = {
  firstName: string;
  lastName: string;
};

const book: Book = {
  title: "12 rules of life",
  author: { firstName: "jurden", lastName: "peterson" },
  pages: 320,
  publishedAt: new Date().toISOString(),
};

type ApiUrls = {
  readonly loginUrl: string;
};

const urls: ApiUrls = {
  loginUrl: "/authorization/login",
};
