
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/data/blog-posts';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CTA } from '@/components/shared/CTA';
import { ContactForm } from '@/components/shared/ContactForm';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${post.title} | Scalify Labs`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug);
    const allPosts = getAllPosts();

    if (!post) {
        notFound();
    }

    // Get latest 3 posts excluding current
    const latestPosts = allPosts
        .filter(p => p.id !== post.id)
        .slice(0, 3);

    // Get unique categories
    const categories = Array.from(new Set(allPosts.map(p => p.category))).sort();

    return (
        <main className="min-h-screen bg-background">
            {/* Header Section */}
            <Section className="pt-32 pb-12 lg:pt-48 lg:pb-20 border-b border-black/5">
                <div className="max-w-6xl mx-auto">
                    <Link href="/knowledge-hub" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground mb-8 transition-colors uppercase tracking-widest">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to Hub
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                            {post.category}
                        </span>
                        <span className="text-muted-foreground font-medium text-sm">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-8 tracking-tight max-w-4xl">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-black text-xl">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-lg font-bold text-foreground leading-none mb-1">{post.author}</p>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Author</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content Section with Sidebar */}
            <Section className="py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div
                            className="prose prose-xl prose-slate md:prose-2xl prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-p:font-medium prose-p:leading-relaxed prose-a:text-brand-blue prose-a:font-bold prose-strong:text-foreground prose-strong:font-bold prose-li:text-muted-foreground prose-li:font-medium max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-16 pt-10 border-t border-black/10">
                            <h4 className="text-sm font-black text-foreground uppercase tracking-widest mb-6">Tags</h4>
                            <div className="flex flex-wrap gap-3">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-sm font-bold text-muted-foreground bg-secondary px-4 py-2 rounded-full">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-32">

                        {/* Enquiry Form Widget */}
                        <div className="bg-brand-cream/50 rounded-[2rem] p-8 border border-brand-orange/10">
                            <h3 className="text-2xl font-black mb-2">Have questions?</h3>
                            <p className="text-muted-foreground font-medium mb-6">Get your free marketing audit today.</p>
                            <ContactForm className="bg-white shadow-none border-0" />
                        </div>

                        {/* Recent Articles */}
                        <div>
                            <h3 className="text-lg font-black uppercase tracking-widest mb-6 border-b pb-2">Latest Insights</h3>
                            <div className="space-y-6">
                                {latestPosts.map(p => (
                                    <Link key={p.id} href={`/knowledge-hub/${p.slug}`} className="group block">
                                        <h4 className="text-lg font-bold leading-tight group-hover:text-brand-blue transition-colors mb-2">
                                            {p.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-lg font-black uppercase tracking-widest mb-6 border-b pb-2">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <Link
                                        key={cat}
                                        href="/knowledge-hub" // Ideally this would link to a filtered view, but for now linking to hub is fine
                                        className="text-sm font-bold bg-secondary hover:bg-black hover:text-white transition-colors px-4 py-2 rounded-full"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            {/* Bottom CTA */}
            <CTA />
        </main>
    );
}
