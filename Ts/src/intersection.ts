type Section = { id: string };
type Data = { items: Array<string> };

interface Salt {
  id: number;
}

type Something = Section & Data;
