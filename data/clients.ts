export type Client = {
  name: string;
  logo: string; // path under /public/logos
};

// Drop logo files into /public/logos and add an entry here.
export const clients: Client[] = [
  // { name: "Acme Corp", logo: "/logos/acme.svg" },
];
