import { SITE_DATA } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Signal Lab" className="size-7 rounded-md" />
          <span className="font-heading font-black text-white">
            Signal <span className="text-signal">Lab</span>
          </span>
        </div>

        <p className="text-text-muted text-sm text-center">
          © 2026 Signal Lab. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={SITE_DATA.personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-signal transition-colors font-medium"
          >
            {SITE_DATA.personal.instagramHandle}
          </a>
          <a
            href={SITE_DATA.personal.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-signal transition-colors font-medium"
          >
            {SITE_DATA.personal.tiktokHandle}
          </a>
          <a
            href={SITE_DATA.personal.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-signal transition-colors font-medium"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
