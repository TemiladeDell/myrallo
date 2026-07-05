function ToolCard({ icon, title, description }) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">

      <div className="flex items-start gap-4">

        <div className="text-3xl text-blue-600">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ToolCard;