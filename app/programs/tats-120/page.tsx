import { redirect } from 'next/navigation';

// TATS 120 is now only offered as TATS 120 ATPL Integrated — keep old links alive.
export default function LegacyTats120() {
  redirect('/programs/atpl-integrated');
}
