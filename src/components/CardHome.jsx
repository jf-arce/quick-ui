import Link from "next/link";

export const CardHome = ({title,description,children}) => {
  return (
    <div className="bg-white dark:bg-neutral-950 rounded-lg shadow-lg overflow-hidden group">
      <Link
        className="h-48 bg-gray-100 dark:bg-neutral-900 flex items-center justify-center"
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
