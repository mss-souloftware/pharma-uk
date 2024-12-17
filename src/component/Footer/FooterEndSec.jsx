import React from 'react';

export default function FooterEndSec() {
  return (
    <footer className="containerbg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <div className="flex justify-center space-x-4">
          <a 
            href="https://example.com/terms" 
            className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
            Terms & Conditions
          </a>
          <a 
            href="https://example.com/privacy" 
            className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
            Privacy Policy
          </a>
        </div>
        <div className="mt-4">
          © 2023 Copyright:
          <a 
            className="text-neutral-800 dark:text-neutral-400" 
            href="https://tw-elements.com/"
          >
           <span className='text-hoverUnderlineColor text-base'>ifeelshy</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
