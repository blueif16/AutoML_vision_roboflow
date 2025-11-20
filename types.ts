import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface UseCaseCategory {
  name: string;
  items: string[];
}

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  useCases: UseCaseCategory[];
}
