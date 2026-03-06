import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from '@/data/resume-data';
import { resumeData as defaultResumeData } from '@/data/resume-data';
import { uiTranslations } from '@/data/ui-translations';

// ─── Color Palette ───────────────────────────────────────────────────────────
const C = {
  sidebarBg: '#0f172a',   // deep navy
  accent: '#eab308',   // golden yellow
  accentLight: '#fef9c3',   // pale yellow
  white: '#ffffff',
  offWhite: '#f8fafc',
  bodyText: '#1e293b',
  mutedText: '#64748b',
  lightBorder: '#e2e8f0',
  sidebarMuted: '#94a3b8',
  sidebarText: '#e2e8f0',
};

const styles = StyleSheet.create({
  // ─── Page ────────────────────────────────────────────────────────────────
  page: {
    flexDirection: 'row',
    backgroundColor: C.white,
    fontFamily: 'Helvetica',
  },

  // ─── Sidebar ─────────────────────────────────────────────────────────────
  sidebar: {
    width: '33%',
    backgroundColor: C.sidebarBg,
    color: C.sidebarText,
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexDirection: 'column',
  },
  sidebarAccentBar: {
    height: 6,
    backgroundColor: C.accent,
    width: '100%',
  },
  sidebarInner: {
    padding: 18,
    flexGrow: 1,
  },

  // Profile
  profileSection: {
    alignItems: 'center',
    marginBottom: 14,
    paddingBottom: 14,
    borderBottom: `1px solid #1e3a5f`,
  },
  profilePhoto: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
    objectFit: 'cover',
    border: `2px solid ${C.accent}`,
  },
  name: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    color: C.white,
    marginBottom: 3,
    letterSpacing: 0.5,
  },
  titleText: {
    fontSize: 7,
    textAlign: 'center',
    color: C.sidebarMuted,
    lineHeight: 1.4,
  },

  // Sidebar sections
  sidebarSection: {
    marginBottom: 12,
  },
  sidebarSectionHeader: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: C.accent,
    marginBottom: 6,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  sidebarDivider: {
    height: 1,
    backgroundColor: '#1e3a5f',
    marginBottom: 10,
  },

  // Contact
  contactRow: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'flex-start',
  },
  contactLabel: {
    fontSize: 6,
    color: C.accent,
    fontFamily: 'Helvetica-Bold',
    width: 14,
    marginTop: 1,
  },
  contactValue: {
    fontSize: 6.5,
    color: C.sidebarText,
    flex: 1,
    lineHeight: 1.35,
  },

  // Skills / competencies list
  sidebarListItem: {
    fontSize: 6.5,
    marginBottom: 3.5,
    color: C.sidebarText,
    lineHeight: 1.3,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  tag: {
    fontSize: 5.5,
    color: C.accent,
    borderWidth: 1,
    borderColor: '#1e3a5f',
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginBottom: 2,
    marginRight: 2,
    backgroundColor: '#1e3a5f',
  },

  // Language bars
  languageItem: {
    marginBottom: 7,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  languageName: {
    fontSize: 7,
    color: C.sidebarText,
  },
  languagePct: {
    fontSize: 6,
    color: C.sidebarMuted,
  },
  languageBar: {
    width: '100%',
    height: 3,
    backgroundColor: '#1e3a5f',
    borderRadius: 2,
  },
  languageBarFill: {
    height: '100%',
    backgroundColor: C.accent,
    borderRadius: 2,
  },

  // Education (sidebar)
  educationItem: {
    marginBottom: 9,
  },
  educationDegree: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: C.sidebarText,
    marginBottom: 1,
    lineHeight: 1.3,
  },
  educationInstitution: {
    fontSize: 6.5,
    color: C.sidebarMuted,
    marginBottom: 1,
  },
  educationPeriod: {
    fontSize: 6,
    color: C.accent,
  },

  // ─── Main Content ─────────────────────────────────────────────────────────
  content: {
    width: '67%',
    backgroundColor: C.white,
    flexDirection: 'column',
  },
  contentAccentHeader: {
    backgroundColor: C.sidebarBg,
    height: 6,
    width: '100%',
  },
  contentInner: {
    padding: 22,
    paddingTop: 18,
    flexGrow: 1,
  },

  // Section headers
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 7,
  },
  sectionHeaderAccent: {
    width: 3,
    height: 12,
    backgroundColor: C.accent,
    marginRight: 7,
    borderRadius: 1,
  },
  sectionHeaderText: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: C.bodyText,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionDivider: {
    height: 0.5,
    backgroundColor: C.lightBorder,
    marginBottom: 8,
  },

  // Summary
  summaryText: {
    fontSize: 8.5,
    lineHeight: 1.55,
    color: C.mutedText,
    marginBottom: 4,
  },

  // Achievements
  achievementItem: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 2,
  },
  achievementBullet: {
    fontSize: 7.5,
    color: C.accent,
    marginRight: 5,
    marginTop: 0.5,
  },
  achievementText: {
    fontSize: 7.5,
    lineHeight: 1.4,
    color: C.bodyText,
    flex: 1,
  },

  // Experience timeline
  experienceTimeline: {
    borderLeft: `1.5px solid ${C.lightBorder}`,
    marginLeft: 5,
    paddingLeft: 12,
  },
  experienceItem: {
    marginBottom: 12,
    marginTop: 2,
  },
  experienceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    marginLeft: -17,
  },
  experienceDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: C.accent,
    marginRight: 6,
    flexShrink: 0,
  },
  experienceRole: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: C.bodyText,
    flex: 1,
  },
  experienceCompanyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.accent,
  },
  experienceDetails: {
    fontSize: 6.5,
    color: C.mutedText,
    marginBottom: 3,
  },
  experienceTechnologies: {
    fontSize: 6,
    color: C.mutedText,
    marginBottom: 4,
    fontStyle: 'italic',
  },
  responsibilityItem: {
    flexDirection: 'row',
    marginBottom: 2.5,
    paddingLeft: 2,
  },
  responsibilityBullet: {
    fontSize: 6.5,
    color: C.mutedText,
    marginRight: 4,
  },
  responsibilityText: {
    fontSize: 6.5,
    lineHeight: 1.4,
    color: C.bodyText,
    flex: 1,
  },

  // Patents
  patentItem: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeft: `2px solid ${C.accentLight}`,
  },
  patentName: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
    color: C.bodyText,
  },
  patentDescription: {
    fontSize: 7,
    lineHeight: 1.4,
    color: C.mutedText,
  },
});

// ─── Helpers ─────────────────────────────────────────────────────────────────
const getLanguagePercentage = (level: string): number => {
  const levelMap: Record<string, number> = {
    Native: 100, 'Full Professional': 90, 'Professional Working': 70, Elementary: 50, Basic: 15,
    Nativo: 100, 'Profissional Completo': 90, Profissional: 70, Elementar: 50, Básico: 15,
  };
  return levelMap[level] || 75;
};

// ─── Component ───────────────────────────────────────────────────────────────
interface ResumePDFProps {
  profilePhotoUrl?: string;
  data?: ResumeData;
  locale?: 'en' | 'pt';
}

export const ResumePDF = ({ profilePhotoUrl, data, locale = 'en' }: ResumePDFProps = {}) => {
  const resume = data ?? defaultResumeData;
  const t = uiTranslations[locale];

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Sidebar ──────────────────────────────────────────────────── */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarAccentBar} />
          <View style={styles.sidebarInner}>

            {/* Profile */}
            <View style={styles.profileSection}>
              {profilePhotoUrl && (
                <Image src={profilePhotoUrl} style={styles.profilePhoto} />
              )}
              <Text style={styles.name}>{resume.name}</Text>
              <Text style={styles.titleText}>{resume.title}</Text>
            </View>

            {/* Contact */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionHeader}>{t.contact}</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>@</Text>
                <Text style={styles.contactValue}>{resume.email}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>⌖</Text>
                <Text style={styles.contactValue}>{resume.location}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>in</Text>
                <Text style={styles.contactValue}>{resume.linkedin}</Text>
              </View>
            </View>

            <View style={styles.sidebarDivider} />

            {/* Languages */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionHeader}>{t.languages}</Text>
              {resume.languages.map((lang, i) => {
                const pct = getLanguagePercentage(lang.level);
                return (
                  <View key={i} style={styles.languageItem}>
                    <View style={styles.languageRow}>
                      <Text style={styles.languageName}>{lang.name}</Text>
                      <Text style={styles.languagePct}>{pct}%</Text>
                    </View>
                    <View style={styles.languageBar}>
                      <View style={[styles.languageBarFill, { width: `${pct}%` }]} />
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={styles.sidebarDivider} />

            {/* Core Competencies */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionHeader}>{t.coreCompetencies}</Text>
              {resume.coreCompetencies.map((comp, i) => (
                <Text key={i} style={styles.sidebarListItem}>· {comp}</Text>
              ))}
            </View>

            <View style={styles.sidebarDivider} />

            {/* Technical Expertise */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionHeader}>{t.technicalExpertise}</Text>
              {resume.technicalExpertise.map((tech, i) => (
                <Text key={i} style={styles.sidebarListItem}>· {tech}</Text>
              ))}
            </View>

            <View style={styles.sidebarDivider} />

            {/* Education */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionHeader}>{t.education}</Text>
              {resume.education.map((edu, i) => (
                <View key={i} style={styles.educationItem}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationInstitution}>{edu.institution}</Text>
                  <Text style={styles.educationPeriod}>{edu.period}</Text>
                </View>
              ))}
            </View>

          </View>
        </View>

        {/* ── Main Content ─────────────────────────────────────────────── */}
        <View style={styles.content}>
          <View style={styles.contentAccentHeader} />
          <View style={styles.contentInner}>

            {/* Summary */}
            <View>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderAccent} />
                <Text style={styles.sectionHeaderText}>{t.professionalSummary}</Text>
              </View>
              <View style={styles.sectionDivider} />
              <Text style={styles.summaryText}>{resume.summary}</Text>
            </View>

            {/* Key Achievements */}
            <View>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderAccent} />
                <Text style={styles.sectionHeaderText}>{t.keyAchievements}</Text>
              </View>
              <View style={styles.sectionDivider} />
              {resume.keyAchievements.map((a, i) => (
                <View key={i} style={styles.achievementItem}>
                  <Text style={styles.achievementBullet}>▸</Text>
                  <Text style={styles.achievementText}>{a}</Text>
                </View>
              ))}
            </View>

            {/* Professional Experience */}
            <View>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderAccent} />
                <Text style={styles.sectionHeaderText}>{t.professionalExperience}</Text>
              </View>
              <View style={styles.sectionDivider} />
              <View style={styles.experienceTimeline}>
                {resume.experience.map((exp, i) => (
                  <View key={i} style={styles.experienceItem} wrap={false}>
                    <View style={styles.experienceHeader}>
                      <View style={styles.experienceDot} />
                      <Text style={styles.experienceRole}>{exp.role}</Text>
                    </View>
                    <View style={styles.experienceCompanyRow}>
                      <Text style={styles.experienceCompany}>{exp.company}</Text>
                    </View>
                    <Text style={styles.experienceDetails}>
                      {exp.period}{exp.duration ? ` (${exp.duration})` : ''} · {exp.location}
                    </Text>
                    {exp.technologies && (
                      <Text style={styles.experienceTechnologies}>
                        {exp.technologies.join(' · ')}
                      </Text>
                    )}
                    {exp.responsibilities.map((resp, ri) => {
                      const urlMatch = resp.match(/\(https?:\/\/[^)]+\)/);
                      const text = urlMatch ? resp.replace(urlMatch[0], '').trim() : resp;
                      return (
                        <View key={ri} style={styles.responsibilityItem}>
                          <Text style={styles.responsibilityBullet}>–</Text>
                          <Text style={styles.responsibilityText}>{text}</Text>
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>
            </View>

            {/* Patents & Innovations */}
            <View>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeaderAccent} />
                <Text style={styles.sectionHeaderText}>{t.patentsAndInnovations}</Text>
              </View>
              <View style={styles.sectionDivider} />
              {resume.patents.map((patent, i) => (
                <View key={i} style={styles.patentItem} wrap={false}>
                  <Text style={styles.patentName}>{patent.name}</Text>
                  {patent.description && (
                    <Text style={styles.patentDescription}>{patent.description}</Text>
                  )}
                </View>
              ))}
            </View>

          </View>
        </View>

      </Page>
    </Document>
  );
};
