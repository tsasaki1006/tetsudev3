import Link from 'next/link';
import { Contribution } from '@/types';
import contributions from '@/data/contributions.json';
import { PlusIcon, CalendarIcon, UserIcon, SparklesIcon, DocumentTextIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 p-4 sm:p-6 lg:p-8">
      <main className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-cyan drop-shadow-[0_0_5px_#00f6ff]">
            マーケティング課貢献サイト
          </h1>
          <p className="mt-2 text-neon-magenta text-sm">
            {/* // TEAM CONTRIBUTION VISUALIZER // */}
          </p>
        </header>

        <div className="flex justify-end mb-8">
          <Link
            href="/contributions/new"
            className="inline-flex items-center gap-x-2 rounded-none border-2 border-neon-lime bg-neon-lime/10 px-6 py-3 font-semibold text-neon-lime shadow-[0_0_10px_#a8ff00] transition-all hover:bg-neon-lime/20 hover:shadow-[0_0_20px_#a8ff00]"
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
            <span>REGISTER_CONTRIBUTION</span>
          </Link>
        </div>

        <div className="border-2 border-neon-magenta/50 bg-dark-bg/50 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b-2 border-neon-magenta/50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left font-semibold text-neon-cyan sm:pl-6">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      DATE
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left font-semibold text-neon-cyan">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      MEMBER
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left font-semibold text-neon-cyan">
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-5 w-5" />
                      APPOINTMENTS
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left font-semibold text-neon-cyan">
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="h-5 w-5" />
                      QUALITATIVE
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left font-semibold text-neon-cyan">
                    <div className="flex items-center gap-2">
                      <DocumentTextIcon className="h-5 w-5" />
                      NOTES
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neon-magenta/30">
                {contributions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      &gt; NO DATA... AWAITING INPUT...
                    </td>
                  </tr>
                ) : (
                  (contributions as Contribution[]).map((contribution) => (
                    <tr key={contribution.id} className="hover:bg-neon-cyan/10">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-white sm:pl-6">
                        {contribution.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-slate-300">
                        {contribution.member}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-slate-300">
                        {contribution.appointments}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-slate-300">
                        {contribution.qualitative}
                      </td>
                      <td className="px-3 py-4 text-slate-300 max-w-xs truncate">
                        {contribution.notes}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}