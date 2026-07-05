function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-slate-50">

      <div className="mx-auto flex max-w-7xl flex-col items-center py-8">

        <h2 className="text-xl font-bold text-blue-600">
          Myrallo
        </h2>

        <a
          href="mailto:support@myrallo.com"
          className="mt-3 text-gray-600 hover:text-blue-600"
        >
          support@myrallo.com
        </a>

        <button className="mt-4 rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          ❤️ Support Myrallo
        </button>

        <div className="mt-4 flex gap-6 text-sm text-gray-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 Myrallo
        </p>

      </div>

    </footer>
  );
}

export default Footer;