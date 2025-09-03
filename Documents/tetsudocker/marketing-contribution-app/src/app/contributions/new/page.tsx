'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { addContribution } from '@/app/actions';
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-none border-2 border-neon-lime bg-neon-lime/10 px-6 py-3 font-semibold text-neon-lime shadow-[0_0_10px_#a8ff00] transition-all hover:bg-neon-lime/20 hover:shadow-[0_0_20px_#a8ff00] disabled:opacity-50 disabled:shadow-none"
    >
      {pending ? 'SENDING...' : 'SUBMIT_DATA'}
    </button>
  );
}

export default function NewContributionPage() {
  const [state, formAction] = useFormState(addContribution, null);

  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 p-4 sm:p-6 lg:p-8">
        <main className="max-w-2xl mx-auto">
            <div className="mb-8">
                <Link href="/" className="flex items-center gap-2 font-mono text-sm text-neon-magenta hover:text-neon-cyan">
                    <ArrowUturnLeftIcon className="h-5 w-5" />
                    &lt; RETURN_TO_HOME
                </Link>
            </div>

            <form action={formAction} className="space-y-8 p-8 border-2 border-neon-cyan/50 bg-dark-bg/50 backdrop-blur-sm">
                <div>
                    <h1 className="text-3xl font-bold text-neon-cyan drop-shadow-[0_0_5px_#00f6ff]">
                        New Contribution
                    </h1>
                    <p className="mt-1 text-sm text-slate-400">
                        &gt; Input mission-critical contribution data below.
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-neon-cyan">
                        DATE
                        </label>
                        <div className="mt-2">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            className="block w-full rounded-none border-0 p-2 bg-dark-bg/80 text-slate-200 ring-1 ring-inset ring-neon-cyan/50 focus:ring-2 focus:ring-inset focus:ring-neon-cyan"
                            required
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="member" className="block text-sm font-medium leading-6 text-neon-cyan">
                        MEMBER_ID
                        </label>
                        <div className="mt-2">
                        <input
                            type="text"
                            name="member"
                            id="member"
                            className="block w-full rounded-none border-0 p-2 bg-dark-bg/80 text-slate-200 ring-1 ring-inset ring-neon-cyan/50 focus:ring-2 focus:ring-inset focus:ring-neon-cyan"
                            required
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="appointments" className="block text-sm font-medium leading-6 text-neon-cyan">
                            APPOINTMENTS
                            </label>
                            <div className="mt-2">
                            <input
                                type="number"
                                name="appointments"
                                id="appointments"
                                defaultValue={0}
                                className="block w-full rounded-none border-0 p-2 bg-dark-bg/80 text-slate-200 ring-1 ring-inset ring-neon-cyan/50 focus:ring-2 focus:ring-inset focus:ring-neon-cyan"
                                required
                            />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="qualitative" className="block text-sm font-medium leading-6 text-neon-cyan">
                            QUALITATIVE_SCORE
                            </label>
                            <div className="mt-2">
                            <input
                                type="number"
                                name="qualitative"
                                id="qualitative"
                                defaultValue={0}
                                className="block w-full rounded-none border-0 p-2 bg-dark-bg/80 text-slate-200 ring-1 ring-inset ring-neon-cyan/50 focus:ring-2 focus:ring-inset focus:ring-neon-cyan"
                                required
                            />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium leading-6 text-neon-cyan">
                        LOG_ENTRY
                        </label>
                        <div className="mt-2">
                        <textarea
                            id="notes"
                            name="notes"
                            rows={4}
                            className="block w-full rounded-none border-0 p-2 bg-dark-bg/80 text-slate-200 ring-1 ring-inset ring-neon-cyan/50 focus:ring-2 focus:ring-inset focus:ring-neon-cyan"
                            required
                        ></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-x-6 border-t-2 border-neon-cyan/50 pt-6">
                    {state?.message && <p className="text-sm text-neon-magenta">{state.message}</p>}
                    <Link href="/" className="font-semibold leading-6 text-neon-cyan hover:text-white">
                        ABORT
                    </Link>
                    <SubmitButton />
                </div>
            </form>
        </main>
    </div>
  );
}
