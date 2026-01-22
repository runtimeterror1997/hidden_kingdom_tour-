
import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export const isContentfulConfigured = !!(spaceId && accessToken);

export const contentfulClient = isContentfulConfigured
    ? createClient({
        space: spaceId!,
        accessToken: accessToken!,
        environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
    })
    : null;


export interface Testimonial {
    id: number;
    name: string;
    location: string;
    text: string;
    rating: number;
}

export async function getTestimonials(): Promise<Testimonial[]> {
    if (!contentfulClient) {
        console.warn('Contentful client is not configured. Returning empty testimonials.');
        return [];
    }

    try {
        const response = await contentfulClient.getEntries({
            content_type: 'testimonial', // Ensure this matches user's Content Type ID in Contentful
            order: ['fields.id'], // Sorting by the custom ID field
        });


        console.log('Fetched testimonials:', response.items.length);

        return response.items.map((item: any) => ({
            id: Number(item.fields.id),
            name: item.fields.name,
            location: item.fields.location,
            text: item.fields.text,
            rating: item.fields.rating,
        }));
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
}
