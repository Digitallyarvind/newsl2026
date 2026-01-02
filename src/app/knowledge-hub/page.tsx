
import React from 'react';
import { Metadata } from 'next';
import { getAllPosts } from '@/data/blog-posts';
import BlogCard from '@/components/knowledge-hub/BlogCard';
import { KnowledgeHubFilter } from '@/components/knowledge-hub/KnowledgeHubFilter';
import { Section } from '@/components/ui/Section';
import { CTA } from '@/components/shared/CTA';

export const metadata: Metadata = {
    title: 'Knowledge Hub | Scalify Labs | Insights for the Bold',
    description: 'No-nonsense insights on SEO, Growth, and Tech. Stop guessing, start scaling.',
};

export default function KnowledgeHubPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen flex flex-col">
            <Section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
                        Knowledge<br />
                        <span className="text-brand-blue">Hub.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto mb-12">
                        Tactics, strategies, and deep dives for brands that want to win.
                    </p>
                </div>
            </Section>

            <Section className="pb-20 lg:pb-32">
                <KnowledgeHubFilter initialPosts={posts} />
            </Section>

            <CTA />
        </main>
    );
}
