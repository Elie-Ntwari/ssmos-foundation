import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, User, Loader2, Newspaper, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { NewsArticle, BlogPost } from '@/types/api';
import { Button } from '@/components/ui/button';
import { getFormattedMultilingualContent as getContent } from '@/utils/multilingual';
import Layout from '@/components/layout/Layout';
import heroBlog from '@/assets/hero-blog.png';
import heroNews from '@/assets/hero-news.png';

type TabType = 'news' | 'blog';

const BlogNews = () => {
  const { t, language } = useLanguage();
  const { id, type } = useParams<{ id?: string; type?: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  // Set active tab based on route
  useEffect(() => {
    if (type === 'blog') setActiveTab('blog');
    else setActiveTab('news');
  }, [type]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [newsRes, blogRes] = await Promise.all([
        contentService.getNews(),
        contentService.getBlogPosts(),
      ]);
      if (newsRes.error === false && newsRes.data) {
        setArticles(newsRes.data.filter(a => a.status === 'published'));
      }
      if (blogRes.error === false && blogRes.data) {
        setBlogPosts(blogRes.data.filter(p => p.status === 'published'));
      }
    } catch (error: any) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getMultilingualContent = (content: { fr?: string; en?: string; ln?: string; sw?: string }): string => {
    return getContent(content, language);
  };

  const newsCategories = Array.from(new Set(articles.map(a => a.category).filter(Boolean))).sort();

  const filteredArticles = selectedCategory
    ? articles.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase())
    : articles;

  // Single article/post detail view
  if (id) {
    const isViewingBlog = type === 'blog';
    
    if (isViewingBlog) {
      const post = blogPosts.find(p => p.id === parseInt(id));
      if (!post) {
        return (
          <Layout>
            <div className="section-padding text-center">
              <h1 className="font-display text-2xl font-bold text-foreground">Article non trouvé</h1>
              <Button asChild className="mt-4"><Link to="/publications">{t('blog.backToList')}</Link></Button>
            </div>
          </Layout>
        );
      }
      return (
        <Layout>
          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute inset-0">
              <img src={heroBlog} alt="Blog SSMos" className="w-full h-full object-cover" />
              <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
                <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link to="/publications/blog" className="hover:text-white transition-colors">{t('nav.blog')}</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white line-clamp-1">{getMultilingualContent(post.title)}</span>
              </nav>
              <Button asChild variant="ghost" className="text-white/80 hover:text-white mb-6">
                <Link to="/publications/blog"><ArrowLeft className="mr-2 h-4 w-4" />{t('blog.backToList')}</Link>
              </Button>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {getMultilingualContent(post.title)}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-2"><User className="h-4 w-4" />{post.author_name}</span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </section>
          <section className="section-padding bg-background">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto">
                {post.image && <img src={post.image} alt={getMultilingualContent(post.title)} className="w-full aspect-video object-cover rounded-xl mb-8" />}
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed text-justify whitespace-pre-wrap">{getMultilingualContent(post.content)}</p>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    }

    // News detail
    const article = articles.find(a => a.id === parseInt(id));
    if (!article) {
      return (
        <Layout>
          <div className="section-padding text-center">
            <h1 className="font-display text-2xl font-bold text-foreground">Article non trouvé</h1>
            <Button asChild className="mt-4"><Link to="/publications">{t('news.backToList')}</Link></Button>
          </div>
        </Layout>
      );
    }
    return (
      <Layout>
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0">
            <img src={heroNews} alt="Actualités SSMos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/publications" className="hover:text-white transition-colors">{t('nav.news')}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white line-clamp-1">{getMultilingualContent(article.title)}</span>
            </nav>
            <Button asChild variant="ghost" className="text-white/80 hover:text-white mb-6">
              <Link to="/publications"><ArrowLeft className="mr-2 h-4 w-4" />{t('news.backToList')}</Link>
            </Button>
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">{article.category}</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">{getMultilingualContent(article.title)}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-2"><User className="h-4 w-4" />{article.author_name}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{new Date(article.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              {article.image && <img src={article.image} alt={getMultilingualContent(article.title)} className="w-full aspect-video object-cover rounded-xl mb-8" />}
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed text-justify whitespace-pre-wrap">{getMultilingualContent(article.content)}</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // List view with tabs
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={activeTab === 'blog' ? heroBlog : heroNews} alt="Publications" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{t('nav.publications')}</span>
          </nav>
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('nav.publications')}
          </motion.h1>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="py-6 bg-muted/50 border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => { setActiveTab('news'); setSelectedCategory(null); }}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeTab === 'news'
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-card border-border text-foreground hover:bg-accent'
              }`}
            >
              <Newspaper className="h-4 w-4" />
              {t('nav.news')}
            </button>
            <button
              onClick={() => { setActiveTab('blog'); setSelectedCategory(null); }}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-card border-border text-foreground hover:bg-accent'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              {t('nav.blog')}
            </button>
          </div>
          
          {/* Category filters for news */}
          {activeTab === 'news' && newsCategories.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2 justify-center mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  selectedCategory === null ? 'bg-secondary text-secondary-foreground border-secondary' : 'bg-card border-border hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                {t('news.category.all')}
              </button>
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    selectedCategory === cat ? 'bg-secondary text-secondary-foreground border-secondary' : 'bg-card border-border hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Content Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {activeTab === 'news' ? (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
                >
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/publications/news/${article.id}`}
                        className="card-institutional group overflow-hidden block"
                      >
                        <div className="aspect-video overflow-hidden rounded-lg mb-4 -mt-2 -mx-2">
                          {article.image ? (
                            <img src={article.image} alt={getMultilingualContent(article.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center"><Newspaper className="h-12 w-12 text-muted-foreground" /></div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">{article.category}</span>
                          <span className="text-muted-foreground text-xs">{new Date(article.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}</span>
                        </div>
                        <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">{getMultilingualContent(article.title)}</h2>
                        <p className="text-muted-foreground text-sm mb-4 text-justify line-clamp-3">{getMultilingualContent(article.excerpt)}</p>
                        <span className="inline-flex items-center text-secondary text-sm font-medium">{t('news.readMore')}<ArrowRight className="ml-1 h-4 w-4" /></span>
                      </Link>
                    </motion.div>
                  ))}
                  {filteredArticles.length === 0 && (
                    <div className="col-span-full text-center py-16">
                      <Newspaper className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">{t('news.noArticles')}</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="blog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/publications/blog/${post.id}`}
                        className="card-institutional group overflow-hidden block"
                      >
                        <div className="aspect-video overflow-hidden rounded-lg mb-4 -mt-2 -mx-2">
                          {post.image ? (
                            <img src={post.image} alt={getMultilingualContent(post.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center"><BookOpen className="h-12 w-12 text-muted-foreground" /></div>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(post.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}</span>
                        </div>
                        <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2 line-clamp-2">{getMultilingualContent(post.title)}</h2>
                        <p className="text-muted-foreground text-sm mb-4 text-justify line-clamp-3">{getMultilingualContent(post.excerpt)}</p>
                        <span className="inline-flex items-center text-secondary text-sm font-medium">{t('blog.readMore')}<ArrowRight className="ml-1 h-4 w-4" /></span>
                      </Link>
                    </motion.div>
                  ))}
                  {blogPosts.length === 0 && (
                    <div className="col-span-full text-center py-16">
                      <BookOpen className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">{t('blog.noPosts') || 'Aucun article disponible'}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogNews;
