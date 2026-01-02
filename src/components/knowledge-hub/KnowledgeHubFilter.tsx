"use client";

import React, { useState, useMemo } from 'react';
import { BlogPost } from '@/data/blog-posts';
import BlogCard from './BlogCard';
import { Search } from 'lucide-react';

interface KnowledgeHubFilterProps {
    initialPosts: BlogPost[];
}

export const KnowledgeHubFilter: React.FC<KnowledgeHubFilterProps> = ({ initialPosts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Derive unique categories from posts
    const categories = useMemo(() => {
        const cats = new Set(initialPosts.map(post => post.category));
        return Array.from(cats).sort();
    }, [initialPosts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchesSearch = (
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            );
            const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
            return matchesSearch && matchesCategory;
        });
    }, [initialPosts, searchQuery, selectedCategory]);

    return (
        <div className="space-y-12">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center max-w-4xl mx-auto">

                {/* Search Bar */}
                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <Search className="h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="block w-full pl-10 pr-3 py-3 border border-border rounded-full leading-5 bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue sm:text-sm font-medium transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${selectedCategory === null
                                ? 'bg-foreground text-background'
                                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                            }`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${selectedCategory === category
                                    ? 'bg-brand-blue text-white'
                                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20 rounded-[3rem] bg-secondary">
                    <p className="text-muted-foreground text-xl font-bold">No articles found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};
