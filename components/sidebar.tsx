import type React from "react";

interface DocSidebarProps {
  activeClass: string;
  sections: {
    title: string;
    id: string;
  }[];
  activeSectionId: string;
  onSectionClick: (id: string) => void;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({
  activeClass,
  sections,
  activeSectionId,
  onSectionClick,
}) => {
  return (
    <div className="w-64 pr-4">
      <nav className="sticky top-20">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => onSectionClick(section.id)}
                className={`w-full text-left px-4 py-2 rounded-md ${activeSectionId === section.id ? activeClass : "text-gray-600 dark:text-gray-300 hover:underline"}`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
