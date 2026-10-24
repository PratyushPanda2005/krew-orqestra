import { z } from "zod";
import { PLANS, SKILLS } from "./options";

/** Small enums kept apart from the records so other modules can import them alone. */
export const Plan = z.enum(PLANS);
export const Skill = z.enum(SKILLS);
