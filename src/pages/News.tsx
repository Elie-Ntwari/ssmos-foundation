import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Loader2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { NewsArticle } from '@/types/api';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const News = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setIsLoading(true);
      const response = await contentService.getNews();
      if (response.error === false && response.data && Array.isArray(response.data)) {
        // Filtrer seulement les articles publiés
        const publishedNews = response.data.filter(article => article.status === 'published');
        setArticles(publishedNews);
      } else {
        setArticles([]);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des actualités:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredArticles = Array.isArray(articles) 
    ? (selectedCategory 
        ? articles.filter(article => article.category.toLowerCase() === selectedCategory.toLowerCase())
        : articles)
    : [];

  // Single article view
  if (id) {
    const article = Array.isArray(articles) ? articles.find(a => a.id === parseInt(id)) : undefined;

    if (!article) {
      return (
        <Layout>
          <div className="section-padding text-center">
            <h1 className="font-display text-2xl font-bold text-foreground">Article non trouvé</h1>
            <Button asChild className="mt-4">
              <Link to="/news">{t('news.backToList')}</Link>
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
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('news.backToList')}
              </Link>
            </Button>
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {language === 'en' ? (article.title.en || article.title.fr) : 
               language === 'ln' ? (article.title.ln || article.title.fr) : 
               language === 'sw' ? (article.title.sw || article.title.fr) : 
               article.title.fr}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author_name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.created_at).toLocaleDateString(language === 'en' ? 'en-US' : language === 'ln' ? 'ln-CD' : language === 'sw' ? 'sw-KE' : 'fr-FR', {
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
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title.fr || article.title.en || 'Actualité'}
                  className="w-full aspect-video object-cover rounded-xl mb-8"
                />
              )}
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                  {language === 'en' ? (article.content.en || article.content.fr) : 
                   language === 'ln' ? (article.content.ln || article.content.fr) : 
                   language === 'sw' ? (article.content.sw || article.content.fr) : 
                   article.content.fr}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // News list view
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {t('news.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                selectedCategory === null
                  ? 'bg-secondary text-secondary-foreground border-secondary'
                  : 'bg-card border-border hover:bg-secondary hover:text-secondary-foreground'
              }`}
            >
              {t('news.category.all')}
            </button>
            {['sst', 'training', 'regulation', 'innovation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-secondary text-secondary-foreground border-secondary'
                    : 'bg-card border-border hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                {t(`news.category.${cat}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {filteredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/news/${article.id}`}
                  className="card-institutional group opacity-0 animate-fade-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 -mt-2 -mx-2">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title.fr || article.title.en || 'Actualité'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {new Date(article.created_at).toLocaleDateString(language === 'en' ? 'en-US' : language === 'ln' ? 'ln-CD' : language === 'sw' ? 'sw-KE' : 'fr-FR')}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
                    {language === 'en' ? (article.title.en || article.title.fr) : 
                     language === 'ln' ? (article.title.ln || article.title.fr) : 
                     language === 'sw' ? (article.title.sw || article.title.fr) : 
                     article.title.fr}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === 'en' ? (article.excerpt.en || article.excerpt.fr) : 
                     language === 'ln' ? (article.excerpt.ln || article.excerpt.fr) : 
                     language === 'sw' ? (article.excerpt.sw || article.excerpt.fr) : 
                     article.excerpt.fr}
                  </p>
                  <span className="inline-flex items-center text-secondary text-sm font-medium">
                    {t('news.readMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              ))}
              {filteredArticles.length === 0 && !isLoading && (
                <div className="col-span-full text-center py-16">
                  <div className="max-w-md mx-auto">
                    <Calendar className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {selectedCategory 
                        ? language === 'en' 
                          ? 'No articles in this category'
                          : language === 'ln'
                          ? 'Ba articles te na esika oyo'
                          : language === 'sw'
                          ? 'Hakuna makala katika kategoria hii'
                          : 'Aucun article dans cette catégorie'
                        : language === 'en'
                        ? 'No news yet'
                        : language === 'ln'
                        ? 'Sango te awa'
                        : language === 'sw'
                        ? 'Hakuna habari bado'
                        : 'Aucune actualité pour le moment'}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('news.noArticles')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default News;
