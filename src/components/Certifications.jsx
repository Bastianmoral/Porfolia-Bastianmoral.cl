import React from 'react';
import { Shield, Medal, Award, BadgeCheck, ExternalLink, Download, FileJson2 } from 'lucide-react';
import { portfolioData, uiTexts } from '../data/portfolioData';

const Certifications = () => {
  // Iconos (manteniendo tu API)
  const getIcon = (iconType) => {
    const icons = {
      shield: <Shield className="w-8 h-8" />,
      medal: <Medal className="w-8 h-8" />,
      award: <Award className="w-8 h-8" />,
      certificate: <BadgeCheck className="w-8 h-8" />, // fallback en vez de "Certificate"
    };
    return icons[iconType] || icons.award;
  };

  // Gradientes (manteniendo tu API)
  const getGradientClass = (color) => {
    const gradients = {
      indigo: 'from-indigo-500 to-indigo-600',
      teal: 'from-teal-500 to-teal-600',
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
    };
    return gradients[color] || gradients.indigo;
  };

  // Guardas
  const navCert = portfolioData.navigation?.find((n) => n.id === 'certificaciones');
  const items = Array.isArray(portfolioData.certifications) ? portfolioData.certifications : [];

  if (!items.length || !navCert?.show) return null;

  return (
    <section id="certificaciones" className="py-16 sm:py-20 px-4 sm:px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center animate-fade-in">
          {uiTexts?.certifications?.title || 'Certificaciones'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.filter(Boolean).map((cert, index) => {
            const {
              id,
              title = 'Certificación',
              issuer = '',
              date = '',
              credential,
              icon = 'award',
              color = 'indigo',
              url,
              badgePng,
              metaJson,
              status,
            } = cert || {};

            return (
              <div
                key={id ?? index}
                className="group bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-indigo-100 dark:border-indigo-800 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${getGradientClass(color)} rounded-lg text-white group-hover:rotate-12 transition-transform duration-300`}>
                    {getIcon(icon)}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {title}
                          <ExternalLink className="w-4 h-4 opacity-70" />
                        </a>
                      ) : (
                        title
                      )}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{issuer}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                      {(date && date !== '—') || status === 'upcoming' ? (
                        <span className="inline-flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {status === 'upcoming' ? (uiTexts?.certifications?.upcoming || 'Próximamente') : date}
                        </span>
                      ) : null}

                      {credential ? (
                        <span className="text-indigo-600 dark:text-indigo-400">{credential}</span>
                      ) : null}
                    </div>

                    {/* Acciones opcionales: badge PNG / JSON */}
                    {(badgePng || metaJson) && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        {badgePng && (
                          <a
                            href={badgePng}
                            download
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all duration-300 hover:scale-105"
                          >
                            <Download className="w-4 h-4" />
                            {uiTexts?.certifications?.downloadBadge || 'Descargar badge (PNG)'}
                          </a>
                        )}
                        {metaJson && (
                          <a
                            href={metaJson}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all duration-300 hover:scale-105"
                          >
                            <FileJson2 className="w-4 h-4" />
                            {uiTexts?.certifications?.viewJson || 'Ver metadata (JSON)'}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
