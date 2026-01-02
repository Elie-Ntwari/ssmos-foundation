import { useLanguage } from '@/i18n/LanguageContext';
import { teamMembers } from '@/data/mockData';
import Layout from '@/components/layout/Layout';

const Team = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {t('team.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            {t('team.subtitle')}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="card-institutional text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-secondary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">
                  {language === 'en' ? member.roleEn : member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {language === 'en' ? member.bioEn : member.bio}
                </p>
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                    {t('team.expertise')}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {(language === 'en' ? member.expertiseEn : member.expertise).map((exp) => (
                      <span
                        key={exp}
                        className="px-2.5 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
