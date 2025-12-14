/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description API route ID for articles
 */
// utils
import { UpdateArticleDto } from "@/types/dtos.type";
import { articles } from "@/utils/data";

// types and interfaces
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    id: string;
  };
}

/**
 * @method GET
 * @route ~/APIs/articles/[id]
 * @description Get a single article by ID
 * @access Public
 */

export const GET = (request: NextRequest, { params }: Props) => {
  const articleId = articles.find((a) => a.id === Number(params.id));
  if (!articleId) {
    return NextResponse.json({ message: "Article not found" }, { status: 404 });
  }
  return NextResponse.json(articleId, { status: 200 });
};

/**
 * @method PUT
 * @route ~/APIs/articles/[id]
 * @description Update an article by ID
 * @access Public
 */

export const PUT = async (request: NextRequest, { params }: Props) => {
  const articleId = articles.find((a) => a.id === Number(params.id));
  if (!articleId) {
    return NextResponse.json({ message: "Article not found" }, { status: 404 });
  }

  const body = (await request.json()) as UpdateArticleDto;

  console.log(body);

  return NextResponse.json(
    { message: "Article updated successfully" },
    { status: 200 }
  );
};

/**
 * @method DELETE
 * @route ~/APIs/articles/[id]
 * @description Delete an article by ID
 * @access Public
 */

export const DELETE = async (request: NextRequest, { params }: Props) => {
  const articleId = articles.find((a) => a.id === Number(params.id));
  if (!articleId) {
    return NextResponse.json({ message: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Article deleted successfully" },
    { status: 200 }
  );
};

