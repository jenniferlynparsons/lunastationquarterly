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
		title: z.coerce.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		currentIssue: z.boolean(),
		issueNumber: z.string().optional().nullable(),
		volumeNumber: z.string().optional().nullable(),
		coverImage: z.string().optional().nullable(),
		coverTitle: z.string().optional().nullable(),
		artistName: z.string().optional().nullable(),
		artistLink: z.string().optional().nullable(),
		stories: z.array(z.string()).nullable(),
		authors: z.array(z.string()).nullable(),
		amazonLink: z.string().optional().nullable(),
		gumroadLink: z.string().optional().nullable(),
		weightlessLink: z.string().optional().nullable(),
		koboLink: z.string().optional().nullable(),
		kindleLink: z.string().optional().nullable(),
		isbn10: z.string().optional().nullable(),
		isbn13: z.string().optional().nullable(),
		payhipLink: z.string().optional().nullable(),
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
