import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-transparent md:p-8 lg:pt-28">
      <div className="mx-auto text-center max-w-7xl">
        <p className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white">
          Development By PanatHub
        </p>
        <div className="flex gap-2 justify-center [&_img]:w-6 [&_img]:py-3">
          <Link
            href="https://github.com/panathub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/github.svg"
              width={10}
              height={10}
              alt="github"
              className="text-gray-500"
            />
          </Link>
          <Link
            href="https://www.facebook.com/panat.bangsangoon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/facebook.svg"
              width={10}
              height={10}
              alt="facebook"
              className="text-gray-500"
            />
          </Link>
          <Link
            href="https://www.instagram.com/zal_mon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/instagram.svg"
              width={10}
              height={10}
              alt="instagram"
              className="text-gray-500"
            />
          </Link>
        </div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
