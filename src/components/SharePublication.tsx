import { useState, type MouseEvent } from 'react';
import { Check, Link2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

interface SharePublicationProps {
  title: string;
  path: string;
  tone?: 'default' | 'light';
}

export function SharePublication({ title, path, tone = 'default' }: SharePublicationProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const english = language === 'en';
  const url = new URL(path, window.location.origin).href;
  const light = tone === 'light';

  const copyLink = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setCopying(true);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(english ? 'Copy this link' : 'Copiez ce lien', url);
    } finally {
      setCopying(false);
    }
  };

  const openShare = (event: MouseEvent, href: string) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const buttonClass = light
    ? 'h-8 border-white/40 bg-white/15 px-2.5 text-white hover:bg-white/25 hover:text-white'
    : 'h-8 px-2.5';

  return (
    <div className="flex flex-wrap gap-1.5" onClick={(event) => event.stopPropagation()}>
      <Button type="button" variant="outline" size="sm" className={buttonClass} onClick={copyLink} disabled={copying} title={english ? 'Copy link' : 'Copier le lien'}>
        {copying ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : copied ? <Check className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
        <span className="ml-1.5">{copied ? (english ? 'Copied' : 'Copié') : (english ? 'Link' : 'Lien')}</span>
      </Button>
      <Button type="button" variant="outline" size="sm" className={buttonClass} onClick={(event) => openShare(event, `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)}>
        Facebook
      </Button>
      <Button type="button" variant="outline" size="sm" className={buttonClass} onClick={(event) => openShare(event, `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)}>
        LinkedIn
      </Button>
      <Button type="button" variant="outline" size="sm" className={buttonClass} onClick={(event) => openShare(event, `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)}>
        X
      </Button>
      <Button type="button" variant="outline" size="sm" className={buttonClass} onClick={(event) => openShare(event, `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`)}>
        WhatsApp
      </Button>
    </div>
  );
}
