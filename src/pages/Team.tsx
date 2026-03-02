import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { TeamMember, TeamPage } from '@/types/api';
import { Loader2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';

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

  // Helper pour obtenir le contenu multilingue
  const getMultilingualContent = (content: { fr?: string; en?: string; ln?: string; sw?: string }): string => {
    return content[language] || content.fr || content.en || '';
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {teamPage ? getMultilingualContent(teamPage.title) : t('team.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            {teamPage ? getMultilingualContent(teamPage.subtitle) : t('team.subtitle')}
          </p>
          {teamPage && teamPage.description && getMultilingualContent(teamPage.description) && (
            <p className="text-white/70 text-base max-w-3xl mx-auto mt-4 opacity-0 animate-fade-up stagger-2">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {Array.isArray(teamMembers) && teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="card-institutional text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-secondary/20">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-2xl font-bold text-muted-foreground">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-3">
                    {language === 'en' ? (member.role.en || member.role.fr) : 
                     language === 'ln' ? (member.role.ln || member.role.fr) : 
                     language === 'sw' ? (member.role.sw || member.role.fr) : 
                     member.role.fr}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {language === 'en' ? (member.bio.en || member.bio.fr) : 
                     language === 'ln' ? (member.bio.ln || member.bio.fr) : 
                     language === 'sw' ? (member.bio.sw || member.bio.fr) : 
                     member.bio.fr}
                  </p>
                  {member.expertise && member.expertise.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                        {t('team.expertise')}
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((exp) => (
                          <span
                            key={exp}
                            className="px-2.5 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
