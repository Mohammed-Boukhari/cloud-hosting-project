/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Validation schemas for API routes
 */

// node modules and libraries
import { z } from "zod";

// url for zod library: https://zod.dev/basics
export const createArticleSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long").max(200),
  body: z.string().min(10, "Body must be at least 10 characters long"),
});
