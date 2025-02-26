export type ExpertRule = {
  kind: "truth" | "myth";
  content: string;
};

export const expertRules: ExpertRule[] = [
  {
    kind: "truth",
    content: "Full stack starter templates are better and easier to use than ones that only partially implement a stack"
  },
  {
    kind: "truth",
    content: "For most basic applications SQL based solutions are a safer bet than NoSQL"
  },
  {
    kind: "truth",
    content: "If you need realtime data it is best to pick a technology that can handle that for you at a high level, like Firebase, Supabase, or Meteor"
  },
  {
    kind: "myth",
    content: "You should manually customize your project to fit your exact needs so that you understand every part of it"
  },
  {
    kind: "myth",
    content: "If you need realtime data, you should implement websockets"
  },
  {
    kind: "truth",
    content: "Templates with comprehensive testing setups save more time than they cost in complexity"
  },
  {
    kind: "truth",
    content: "Docker configuration in a starter template significantly reduces deployment and team onboarding friction"
  },
  {
    kind: "myth",
    content: "You should always start with the most minimal template possible and add features as needed"
  },
  {
    kind: "truth",
    content: "Authentication and authorization are complex enough that you should prefer templates that include them pre-configured"
  }
]; 