import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <div className="text-8xl font-black text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-black text-neutral-900 mb-2">Page introuvable</h1>
        <p className="text-neutral-600 mb-8">La page que vous recherchez n&apos;existe pas.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
