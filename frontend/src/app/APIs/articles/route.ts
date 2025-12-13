/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description API route for articles
 */

/**
 * @method GET
 * @route ~/APIs/articles
 * @description Get all articles
 * @access Public
 */

// types
import { NextRequest, NextResponse } from "next/server";

// utils
import { articles } from "@/utils/data";




// GET /api/articles
export const GET = (request: NextRequest) => {


  return NextResponse.json(articles, { status: 200 });
};
