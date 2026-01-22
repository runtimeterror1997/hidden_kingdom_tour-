
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
    if (!isContentfulConfigured) {
        console.warn('Contentful is NOT configured. Please check CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.');
        return [];
    }

    if (!contentfulClient) {
        console.error('Contentful client is null despite being configured.');
        return [];
    }

    try {
        const response = await contentfulClient.getEntries({
            content_type: 'testimonial', // Ensure this matches user's Content Type ID in Contentful
            order: ['fields.id'], // Sorting by the custom ID field
        });


        console.log(`Successfully fetched ${response.items.length} testimonial entries from Contentful.`);

        if (response.items.length === 0) {
            console.log('No entries found for content_type: "testimonial". Check your Contentful dashboard.');
        }

        return response.items.map((item: any) => {
            // Log the first item to verify structure if needed
            if (response.items.indexOf(item) === 0) {
                console.log('Sample testimonial entry fields:', Object.keys(item.fields));
            }
            return {
                id: Number(item.fields.id || 0),
                name: item.fields.name || 'Anonymous',
                location: item.fields.location || '',
                text: item.fields.text || '',
                rating: Number(item.fields.rating || 5),
            };
        });
    } catch (error: any) {
        console.error('Error fetching testimonials from Contentful:', {
            message: error.message,
            stack: error.stack,
            details: error.details
        });
        return [];
    }
}
