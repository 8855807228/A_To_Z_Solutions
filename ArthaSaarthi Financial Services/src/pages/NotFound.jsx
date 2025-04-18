import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-8 text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-x-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
