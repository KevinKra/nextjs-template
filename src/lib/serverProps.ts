/* eslint-disable @typescript-eslint/no-unused-vars */

import { AppContextType } from 'next/dist/shared/lib/utils';

/* eslint-disable @typescript-eslint/require-await */
export default async function getServerSideProps(ctx: AppContextType) {
  // ! assumed ctx type -- need to confirm in docs
  // do something
  return {
    // data
  };
}
