/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description API route for articles
 */

// utils
import { articles } from "@/utils/data";
import { createArticleSchema } from "@/utils/validationShemas";

// types
import { NextRequest, NextResponse } from "next/server";
import { Article } from "@/types/article.type";
import { CreateArticleDto } from "@/types/dtos.type";

/**
 * @method GET
 * @route ~/APIs/articles
 * @description Get all articles
 * @access Public
 */

// GET /api/articles
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = (request: NextRequest) => {
  return NextResponse.json(articles, { status: 200 });
};

/**
 * @method POST
 * @route ~/APIs/articles
 * @description Create a new article
 * @access Public
 */

// POST /api/articles
export const POST = async (request: NextRequest) => {
  const body = (await request.json()) as CreateArticleDto;

  // Validate request body using Zod schema
  const validation = createArticleSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.issues[0].message },
      { status: 400 }
    );
  }

  const newArticle: Article = {
    id: articles.length + 1,
    userId: 200,
    title: body.title,
    body: body.body,
  };

  articles.push(newArticle);
  return NextResponse.json(newArticle, { status: 201 });
};
