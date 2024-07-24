export type Guide = {
  id: number;
  title: string;
  subtitle: string;
};

export const guides: Guide[] = [
  {
    id: 1,
    title: "Data Platform",
    subtitle:
      "Clean and enrich your product data for exceptional product discovery experiences",
  },
  {
    id: 2,
    title: "Conversation Studio",
    subtitle:
      "Create and manage digital assistants to guide customers to the perfect products",
  },
  {
    id: 3,
    title: "Configuration Studio",
    subtitle:
      "Create and manage visual configurators to configure and bundle products easily",
  },
  {
    id: 4,
    title: "Search Studio",
    subtitle:
      "Create and manage intelligent search experiences to deliver more accurate and relevant search results",
  },
  {
    id: 5,
    title: "Advisor Studio",
    subtitle:
      "Build Zoe, your GenAI shopping advisor, to assist your customers in making confident purchases",
  },
];
