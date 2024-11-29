import AppTimeline from '../components/atomics/AppTimeline';
import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/exp.json';

const Resume = () => (
  <AppShell
    title={`Zeeshan Khalid | ${USER.experiences.title}`}
    description={USER.experiences.description}
    keyword="resume, education, course, skill"
  >
    <AppHeader
      title={USER.experiences.title}
      description={USER.experiences.description}
    />
    {USER.experiences.contents.map((item) => (
      <AppSection key={item.id} title={item.title} className="py-0">
        {item.contents.map((subItem) => (
          <AppTimeline key={subItem.id} item={subItem}>
            {subItem.description}
            {subItem.list ? (
              <ul className="mt-4">
                {subItem.list.map((listItem) => (
                  <li key={listItem.id} className="list-disc list-inside mb-2">
                    <a
                      href={listItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-primary"
                      title={listItem.level}
                    >
                      {listItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </AppTimeline>
        ))}
      </AppSection>
    ))}
  </AppShell>
);

export default Resume;
