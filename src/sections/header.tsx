// src/components/Header.tsx
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        {/* Include Favicon Logo */}
        <img
          src="/fav.avif" // Use the favicon as a logo (or replace with your logo URL)
          alt="Logo"
          className="mb-4 h-12 w-12 rounded-full" // Adjust size and styles as needed
        />
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          Neobrutalism Saas Template
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          Get started with your saas landing page in minutes.
          <br /> Check the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer" // Add this for security
            href="https://github.com/mxnuag"
            className="font-heading underline"
          >
            github repo
          </a>{' '}
          for more info.
        </p>
        <a 
          href="https://dribbble.com/tags/saas-neubrutalism" 
          target="_blank" 
          rel="noopener noreferrer" // Add this for security
        >
          <Button
            size="lg"
            className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
          >
            Get started
          </Button>
        </a>
      </div>
    </header>
  );
}
