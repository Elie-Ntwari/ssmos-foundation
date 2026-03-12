import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { TeamMember, TeamPage } from '@/types/api';
import { ChevronRight, Loader2 } from 'lucide-react';
import { getMultilingualContent as getContent } from '@/utils/multilingual';
import Layout from '@/components/layout/Layout';
import heroTeam from '@/assets/hero-2.png';

const Team = () => {
  const { t, language } = useLanguage();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [teamPage, setTeamPage] = useState<TeamPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    loadTeamData();
  }, []);

  const loadTeamData = async () => {
    try {
      setIsLoading(true);
      setIsLoadingPage(true);
      
      // Charger les membres de l'équipe
      const membersResponse = await contentService.getTeamMembers();
      if (membersResponse.error === false && membersResponse.data) {
        setTeamMembers(membersResponse.data);
      }

      // Charger la page équipe
      const pageResponse = await contentService.getTeamPage();
      if (pageResponse.error === false && pageResponse.data && pageResponse.data.length > 0) {
        setTeamPage(pageResponse.data[0]);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingPage(false);
    }
  };

  // Helper pour obtenir le contenu multilingue (utilise la langue actuelle)
  const getMultilingualContent = (content: { fr?: string; en?: string; ln?: string; sw?: string }): string => {
    return getContent(content, language);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={heroTeam} alt="Equipe SSMos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{t('nav.team')}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {teamPage ? getMultilingualContent(teamPage.title) : t('team.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl opacity-0 animate-fade-up stagger-1">
            {teamPage ? getMultilingualContent(teamPage.subtitle) : t('team.subtitle')}
          </p>
          {teamPage && teamPage.description && getMultilingualContent(teamPage.description) && (
            <p className="text-white/70 text-base max-w-3xl mt-4 opacity-0 animate-fade-up stagger-2">
              {getMultilingualContent(teamPage.description)}
            </p>
          )}
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.isArray(teamMembers) && teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="card-institutional text-center opacity-0 animate-fade-up hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Photo circulaire améliorée */}
                  <div className="flex justify-center mb-6 -mt-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-background shadow-xl">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              // Fallback si l'image ne charge pas
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/20 flex items-center justify-center">
                                    <span class="text-4xl font-bold text-primary">${member.name.charAt(0).toUpperCase()}</span>
                                  </div>
                                `;
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/20 flex items-center justify-center">
                            <span className="text-4xl font-bold text-primary">
                              {member.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="px-4 pb-4">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm md:text-base mb-4">
                      {language === 'en' ? (member.role.en || member.role.fr) : 
                       language === 'ln' ? (member.role.ln || member.role.fr) : 
                       language === 'sw' ? (member.role.sw || member.role.fr) : 
                       member.role.fr}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed line-clamp-4">
                      {language === 'en' ? (member.bio.en || member.bio.fr) : 
                       language === 'ln' ? (member.bio.ln || member.bio.fr) : 
                       language === 'sw' ? (member.bio.sw || member.bio.fr) : 
                       member.bio.fr}
                    </p>
                    {member.expertise && member.expertise.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                          {t('team.expertise')}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.expertise.map((exp) => (
                            <span
                              key={exp}
                              className="px-3 py-1.5 bg-accent text-accent-foreground text-xs rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {teamMembers.length === 0 && !isLoading && (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <p>{t('team.noMembers') || 'Aucun membre disponible'}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Join our team' : 'Rejoignez notre équipe'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'en'
              ? 'We are always looking for talented professionals passionate about occupational health and safety.'
              : 'Nous sommes toujours à la recherche de professionnels talentueux passionnés par la santé et sécurité au travail.'}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
