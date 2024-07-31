import Link from "@docusaurus/Link";

export const CardHome = ({title,description,children}:{title:string,description:string,children:JSX.Element}) : JSX.Element => {
  return (
    <div className="bg-neutral-950 rounded-lg shadow-lg overflow-hidden group">
      <Link
        className="h-48 bg-neutral-900 flex items-center justify-center"
        href="#"
      >
        {children}
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:underline transition-all">
            {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
            {description}
        </p>
      </div>
    </div>
  );
};