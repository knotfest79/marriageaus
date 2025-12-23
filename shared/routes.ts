import { z } from 'zod';
import { insertEnquirySchema, insertNoimSchema, enquiries, noimSubmissions } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  enquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/enquiries',
      input: insertEnquirySchema,
      responses: {
        201: z.custom<typeof enquiries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  noim: {
    create: {
      method: 'POST' as const,
      path: '/api/noim',
      input: insertNoimSchema,
      responses: {
        201: z.custom<typeof noimSubmissions.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
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
