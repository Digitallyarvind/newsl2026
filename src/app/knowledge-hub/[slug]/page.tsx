
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/data/blog-posts';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

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

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Header Section */}
            <Section className="pt-32 pb-12 lg:pt-48 lg:pb-20 border-b border-black/5">
                <div className="max-w-4xl mx-auto">
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

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-8 tracking-tight">
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

            {/* Content Section */}
            <Section className="py-16 lg:py-24">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="prose prose-xl prose-slate md:prose-2xl prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-p:font-medium prose-p:leading-relaxed prose-a:text-brand-blue prose-a:font-bold prose-strong:text-foreground prose-strong:font-bold prose-li:text-muted-foreground prose-li:font-medium"
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
            </Section>

            {/* CTA Section */}
            <Section className="py-20 lg:py-32 bg-black text-white rounded-t-[3rem] mt-12">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                        Turn insights into <span className="text-brand-green">Action.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Ready to apply these strategies to your business? Let&apos;s talk growth.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 text-xl px-12 py-8 h-auto font-black rounded-full">
                            START NOW <ArrowUpRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </main>
    );
}
