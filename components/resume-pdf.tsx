import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from '@/data/resume-data';
import { resumeData as defaultResumeData } from '@/data/resume-data';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  sidebar: {
    width: '35%',
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: 20,
  },
  content: {
    width: '65%',
    padding: 20,
    paddingTop: 30,
  },
  // Profile section
  profileSection: {
    marginBottom: 15,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    alignSelf: 'center',
    objectFit: 'cover',
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 8,
    textAlign: 'center',
    marginBottom: 15,
    color: '#e5e7eb',
  },
  // Section headers
  sidebarSectionHeader: {
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    paddingBottom: 5,
    borderBottom: '1px solid rgba(234, 179, 8, 0.5)',
    textTransform: 'uppercase',
  },
  contentSectionHeader: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    paddingBottom: 3,
    borderBottom: '1px solid #cbd5e1',
    textTransform: 'uppercase',
    color: '#1e293b',
  },
  // Sidebar items
  sidebarText: {
    fontSize: 7,
    marginBottom: 5,
    lineHeight: 1.4,
  },
  sidebarListItem: {
    fontSize: 7,
    marginBottom: 4,
    lineHeight: 1.3,
  },
  languageItem: {
    marginBottom: 8,
  },
  languageName: {
    fontSize: 7,
    marginBottom: 3,
  },
  languageBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#4b5563',
    borderRadius: 2,
    overflow: 'hidden',
  },
  languageBarFill: {
    height: '100%',
    backgroundColor: '#eab308',
  },
  // Contact section
  contactText: {
    fontSize: 6.5,
    marginBottom: 5,
    lineHeight: 1.3,
    wordWrap: 'break-word',
  },
  contactLink: {
    fontSize: 5.5,
    marginBottom: 5,
    lineHeight: 1.3,
    wordWrap: 'break-word',
  },
  // Content items
  summaryText: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 10,
    color: '#374151',
  },
  achievementItem: {
    fontSize: 7,
    marginBottom: 5,
    marginLeft: 10,
    lineHeight: 1.4,
    color: '#374151',
  },
  // Experience items
  experienceItem: {
    marginBottom: 12,
    marginTop: 8,
    paddingLeft: 15,
    borderLeft: '2px solid #cbd5e1',
    position: 'relative',
  },
  experienceDot: {
    position: 'absolute',
    left: -6,
    top: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#eab308',
    border: '2px solid #ffffff',
  },
  experienceRole: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#111827',
  },
  experienceCompany: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#4b5563',
  },
  experienceDetails: {
    fontSize: 7,
    marginBottom: 3,
    color: '#6b7280',
  },
  experienceTechnologies: {
    fontSize: 6,
    marginBottom: 5,
    color: '#6b7280',
  },
  responsibilityItem: {
    fontSize: 7,
    marginBottom: 3,
    marginLeft: 10,
    lineHeight: 1.4,
    color: '#374151',
  },
  // Education
  educationItem: {
    marginBottom: 10,
  },
  educationPeriod: {
    fontSize: 7,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  educationInstitution: {
    fontSize: 6,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 6,
    marginLeft: 10,
  },
  // Patents
  patentItem: {
    marginBottom: 8,
  },
  patentName: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#111827',
  },
  patentDescription: {
    fontSize: 7,
    lineHeight: 1.4,
    color: '#4b5563',
  },
});

const getLanguagePercentage = (level: string): number => {
  const levelMap: Record<string, number> = {
    Native: 100,
    'Full Professional': 90,
    'Professional Working': 70,
    Elementary: 50,
    Basic: 15,
  };
  return levelMap[level] || 75;
};

interface ResumePDFProps {
  profilePhotoUrl?: string;
  data?: ResumeData;
}

export const ResumePDF = ({ profilePhotoUrl, data }: ResumePDFProps = {}) => {
  const resume = data ?? defaultResumeData;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          {/* Profile */}
          <View style={styles.profileSection}>
            {profilePhotoUrl && (
              <Image
                src={profilePhotoUrl}
                style={styles.profilePhoto}
              />
            )}
            <Text style={styles.name}>{resume.name}</Text>
            <Text style={styles.title}>{resume.title}</Text>
          </View>

          {/* Languages */}
          <View>
            <Text style={styles.sidebarSectionHeader}>Languages</Text>
            {resume.languages.map((lang, index) => {
              const percentage = getLanguagePercentage(lang.level);
              return (
                <View key={index} style={styles.languageItem}>
                  <Text style={styles.languageName}>{lang.name} - {percentage}%</Text>
                  <View style={styles.languageBar}>
                    <View style={[styles.languageBarFill, { width: `${percentage}%` }]} />
                  </View>
                </View>
              );
            })}
          </View>

          {/* Core Competencies */}
          <View>
            <Text style={styles.sidebarSectionHeader}>Core Competencies</Text>
            {resume.coreCompetencies.map((comp, index) => (
              <Text key={index} style={styles.sidebarListItem}>• {comp}</Text>
            ))}
          </View>

          {/* Technical Expertise */}
          <View>
            <Text style={styles.sidebarSectionHeader}>Technical Expertise</Text>
            {resume.technicalExpertise.map((tech, index) => (
              <Text key={index} style={styles.sidebarListItem}>• {tech}</Text>
            ))}
          </View>

          {/* Education */}
          <View>
            <Text style={styles.sidebarSectionHeader}>Education</Text>
            {resume.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.educationPeriod}>{edu.period}</Text>
                <Text style={styles.educationInstitution}>{edu.institution}</Text>
                <Text style={styles.educationDegree}>• {edu.degree}</Text>
              </View>
            ))}
          </View>

          {/* Contact */}
          <View>
            <Text style={styles.sidebarSectionHeader}>Contact</Text>
            <Text style={styles.contactText}>{resume.location}</Text>
            <Text style={styles.contactLink}>{resume.email}</Text>
            <Text style={styles.contactLink}>{resume.linkedin}</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Summary */}
          <View>
            <Text style={styles.contentSectionHeader}>Summary</Text>
            <Text style={styles.summaryText}>{resume.summary}</Text>
          </View>

          {/* Key Achievements */}
          <View>
            <Text style={styles.contentSectionHeader}>Key Achievements</Text>
            {resume.keyAchievements.map((achievement, index) => (
              <Text key={index} style={styles.achievementItem}>• {achievement}</Text>
            ))}
          </View>

          {/* Professional Experience */}
          <View>
            <Text style={styles.contentSectionHeader}>Professional Experience</Text>
            {resume.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem} wrap={false}>
                <View style={styles.experienceDot} />
                <Text style={styles.experienceRole}>{exp.role}</Text>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                <Text style={styles.experienceDetails}>
                  {exp.period} {exp.duration && `(${exp.duration})`} • {exp.location}
                </Text>
                {exp.technologies && (
                  <Text style={styles.experienceTechnologies}>
                    {exp.technologies.join(', ')}
                  </Text>
                )}
                {exp.responsibilities.map((resp, respIndex) => {
                  const urlMatch = resp.match(/\(https?:\/\/[^)]+\)/);
                  const text = urlMatch ? resp.replace(urlMatch[0], '').trim() : resp;
                  return (
                    <Text key={respIndex} style={styles.responsibilityItem}>
                      • {text}
                    </Text>
                  );
                })}
              </View>
            ))}
          </View>

          {/* Patents & Innovations */}
          <View>
            <Text style={styles.contentSectionHeader}>Patents & Innovations</Text>
            {resume.patents.map((patent, index) => (
              <View key={index} style={styles.patentItem} wrap={false}>
                <Text style={styles.patentName}>{patent.name}</Text>
                {patent.description && (
                  <Text style={styles.patentDescription}>{patent.description}</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
