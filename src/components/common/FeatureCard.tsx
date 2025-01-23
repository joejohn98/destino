interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        {icon}
      </div>
      <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
