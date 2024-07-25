import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export const DonationImagePopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent w-full md:w-auto max-w-full select-none text-[#209ce9] border-[#209ce9] text-sm md:text-base hover:bg-transparent hover:text-green-400 hover:border-green-400 px-2 py-1 md:px-4 md:py-2 h-auto min-h-[2.5rem] whitespace-normal text-center"
        >
          Make a small Donation
          <br className="md:hidden" /> and see what happens! 😛 🌎 🚀
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[90vw] md:w-auto bg-transparent p-0 mb-2">
        <div className="flex flex-col items-center bg-transparent text-gray-300">
          <img
            src="/donation/my_nano_donation_account.jpg"
            alt="Nano Donation QR Code"
            className="max-w-full max-h-fit md:max-w-[510px] md:max-h-[300px] object-contain"
          />
          <p className="text-center text-[14px] my-3">
            nano_1osom16ctb773i6zi5fnepfro7bcmr5yqxb4qnmtzxkmdg88o4x6obmchzna
          </p>
          <p className="text-center text-sm my-4 text-[18px] select-none">
            Thank you for your donation! 🙏
          </p>
          <p className="text-center mb-1">
            If you made a mistake sending Nano, please let me know at &nbsp;
          </p>
          <center className="mb-2">
            {' '}
            <a href="https://x.com/dalinhuang" className="text-[#209ce9]">
              x.com/dalinhuang
            </a>
          </center>
        </div>
      </PopoverContent>
    </Popover>
  );
};
