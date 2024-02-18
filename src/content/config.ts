import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		heroAltText: z.string().optional(),
		excerpt: z.string().optional(),
		author: z.string().optional(), 
		authorSlug: z.string().optional(),
		postCategory: z.string().optional(),
		categorySlug: z.string().optional(),
	}),
});

const issues = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		coverImage: z.string().optional(),
		coverTitle: z.string().optional(),
		artistName: z.string().optional(),
		artistLink: z.string().optional(),
		stories: z.array(z.string()),
		authors: z.array(z.string()),
		authorSlugs: z.array(z.string()).optional(),
		amazonLink: z.string().optional(),
		gumroadLink: z.string().optional(),
		weightlessLink: z.string().optional(),
		koboLink: z.string().optional(),
		kindleLink: z.string().optional(),
	}),
});


export const collections = { blog, issues };
