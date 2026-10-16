const ALLOWED_TAGS = new Set(['B', 'STRONG', 'I', 'EM', 'U', 'H2', 'H3', 'P', 'BR', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'A', 'DIV']);

function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

export function toPlainText(value: string): string {
  if (!looksLikeHtml(value)) return value;
  const doc = new DOMParser().parseFromString(value, 'text/html');
  return doc.body.textContent || '';
}

function sanitizeRichHtml(input: string): string {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  const clean = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType !== Node.ELEMENT_NODE) return;
      const element = child as HTMLElement;
      if (!ALLOWED_TAGS.has(element.tagName)) {
        while (element.firstChild) node.insertBefore(element.firstChild, element);
        node.removeChild(element);
        clean(node);
        return;
      }
      Array.from(element.attributes).forEach((attr) => {
        const keepLink = element.tagName === 'A' && attr.name === 'href' && /^https?:\/\//i.test(attr.value);
        if (!keepLink) element.removeAttribute(attr.name);
      });
      if (element.tagName === 'A') {
        element.setAttribute('target', '_blank');
        element.setAttribute('rel', 'noopener noreferrer');
      }
      clean(element);
    });
  };
  clean(doc.body);
  return doc.body.innerHTML;
}

const richClass = '[&_b]:font-bold [&_strong]:font-bold [&_i]:italic [&_em]:italic [&_u]:underline [&_h2]:mt-4 [&_h2]:mb-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-3 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_a]:text-secondary [&_a]:underline';

export function RichContent({ text, className = '' }: { text: string; className?: string }) {
  if (!text) return null;
  if (!looksLikeHtml(text)) {
    return <div className={`whitespace-pre-wrap ${className}`}>{text}</div>;
  }
  return (
    <div
      className={`${richClass} ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }}
    />
  );
}
