import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
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
		// Transform string to Date object
		pubDate: z.coerce.date(),
		currentIssue: z.boolean(),
		issueNumber: z.string(),
		coverImage: z.string().optional(),
		coverTitle: z.string().optional(),
		artistName: z.string().optional(),
		artistLink: z.string().optional(),
		stories: z.array(z.string()),
		authors: z.array(z.string()),
		amazonLink: z.string().optional(),
		gumroadLink: z.string().optional(),
		weightlessLink: z.string().optional(),
		koboLink: z.string().optional(),
		kindleLink: z.string().optional(),
    isbn10: z.string().optional(),
    isbn13: z.string().optional(),
		payhipLink: z.string().optional(),

	}),
});

const authors = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		authorName: z.string(),
		authorWebsite: z.string().optional().nullable(),
		authorTwitter: z.string().optional().nullable(),
		authorFacebook: z.string().optional().nullable(),
		authorGoodreads: z.string().optional().nullable(),
		authorTumblr: z.string().optional().nullable(),
		authorMastodon: z.string().optional().nullable(),
		authorBluesky: z.string().optional().nullable(),
		authorInstagram: z.string().optional().nullable(),
		authorAmazon: z.string().optional().nullable(),
		authorLinkedIn: z.string().optional().nullable(),
	}),
});

export const collections = { blog, issues, authors };
