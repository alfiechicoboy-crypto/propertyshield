import { z } from "zod";
import { insertEnquirySchema } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  enquiries: {
    create: {
      method: "POST" as const,
      path: "/api/enquiries" as const,
      input: insertEnquirySchema,
      responses: {
        201: z.object({
          id: z.number(),
          message: z.string(),
        }),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: "GET" as const,
      path: "/api/enquiries" as const,
      responses: {
        200: z.array(z.any()),
      },
    },
  },
};

export function buildUrl(
  path: string,
  params?: Record<string, string | number>
): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type CreateEnquiryInput = z.infer<typeof api.enquiries.create.input>;
export type ValidationError = z.infer<typeof errorSchemas.validation>;
