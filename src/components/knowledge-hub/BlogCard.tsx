
import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog-posts';
import { Button } from '@/components/ui/Button'; // Import Button properly
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

const colors = [
    { bg: "bg-brand-cream", text: "text-foreground", accent: "bg-brand-orange" },
    { bg: "bg-brand-green", text: "text-black", accent: "bg-white" },
    { bg: "bg-brand-pink", text: "text-black", accent: "bg-white" },
    { bg: "bg-brand-blue", text: "text-white", accent: "bg-white" },
];

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
    const theme = colors[index % colors.length];

    return (
        <div className={cn("rounded-[2.5rem] p-8 flex flex-col h-full transition-all hover:-translate-y-2 duration-300 group", theme.bg)}>
            <div className="flex justify-between items-start mb-6">
                <span className={cn("text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest bg-white/20 backdrop-blur-sm", theme.text)}>
                    {post.category}
                </span>
                <span className={cn("text-xs font-medium opacity-80", theme.text)}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
            </div>

            <Link href={`/knowledge-hub/${post.slug}`} className="block mb-4 flex-grow">
                <h3 className={cn("text-3xl font-black tracking-tight leading-tight mb-4", theme.text)}>
                    {post.title}
                </h3>
                <p className={cn("text-lg font-medium leading-relaxed opacity-90 line-clamp-3", theme.text)}>
                    {post.excerpt}
                </p>
            </Link>

            <div className="mt-auto pt-6 border-t border-black/5 flex justify-between items-center bg-transparent">
                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className={cn("text-[10px] font-bold uppercase tracking-wider opacity-60", theme.text)}>#{tag}</span>
                    ))}
                </div>
                <Link href={`/knowledge-hub/${post.slug}`}>
                    <Button size="icon" className={cn("rounded-full w-12 h-12", theme.accent === 'bg-white' ? 'bg-white text-black hover:bg-white/90' : 'bg-brand-orange text-white hover:bg-brand-orange/90')}>
                        <ArrowUpRight className="w-6 h-6" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
