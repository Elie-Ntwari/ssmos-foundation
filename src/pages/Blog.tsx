import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Loader2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { BlogPost } from '@/types/api';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Blog = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    try {
      setIsLoading(true);
      const response = await contentService.getBlogPosts();
      if (response.error === false && response.data && Array.isArray(response.data)) {
        // Filtrer seulement les articles publiés
        const publishedPosts = response.data.filter(post => post.status === 'published');
        setBlogPosts(publishedPosts);
      } else {
        setBlogPosts([]);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Single post view
  if (id) {
    const post = Array.isArray(blogPosts) ? blogPosts.find(p => p.id === parseInt(id)) : undefined;

    if (!post) {
      return (
        <Layout>
          <div className="section-padding text-center">
            <h1 className="font-display text-2xl font-bold text-foreground">Article non trouvé</h1>
            <Button asChild className="mt-4">
              <Link to="/blog">{t('blog.backToList')}</Link>
            </Button>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Hero */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="text-white/80 hover:text-white mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('blog.backToList')}
              </Link>
            </Button>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {language === 'en' ? (post.title.en || post.title.fr) : 
               language === 'ln' ? (post.title.ln || post.title.fr) : 
               language === 'sw' ? (post.title.sw || post.title.fr) : 
               post.title.fr}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author_name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title.fr || post.title.en || 'Article'}
                  className="w-full aspect-video object-cover rounded-xl mb-8"
                />
              )}
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                  {language === 'en' ? (post.content.en || post.content.fr) : 
                   language === 'ln' ? (post.content.ln || post.content.fr) : 
                   language === 'sw' ? (post.content.sw || post.content.fr) : 
                   post.content.fr}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Blog list view
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {t('blog.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {Array.isArray(blogPosts) && blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="card-institutional group opacity-0 animate-fade-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 -mt-2 -mx-2">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title.fr || post.title.en || 'Article'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                    {language === 'en' ? (post.title.en || post.title.fr) : 
                     language === 'ln' ? (post.title.ln || post.title.fr) : 
                     language === 'sw' ? (post.title.sw || post.title.fr) : 
                     post.title.fr}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {language === 'en' ? (post.excerpt.en || post.excerpt.fr) : 
                     language === 'ln' ? (post.excerpt.ln || post.excerpt.fr) : 
                     language === 'sw' ? (post.excerpt.sw || post.excerpt.fr) : 
                     post.excerpt.fr}
                  </p>
                  <span className="inline-flex items-center text-secondary text-sm font-medium">
                    {t('blog.readMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              ))}
              {blogPosts.length === 0 && !isLoading && (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <p>{t('blog.noPosts') || 'Aucun article disponible'}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
