import Link from 'next/link';

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <Link 
            href={link}
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  title: 'Project Title',
  description: 'Project description goes here. A brief overview of what the project is about and what technologies were used.',
  tags: ['React', 'Next.js', 'Tailwind'],
  link: '#'
};
