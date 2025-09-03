'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Contribution } from '@/types';

const dataFilePath = path.join(process.cwd(), 'src/data/contributions.json');

export type FormState = {
    message: string;
    errors?: string[];
} | null;

export async function addContribution(prevState: FormState, formData: FormData): Promise<FormState> {
  const newContribution = {
    id: crypto.randomUUID(),
    date: formData.get('date') as string,
    member: formData.get('member') as string,
    appointments: Number(formData.get('appointments')),
    qualitative: Number(formData.get('qualitative')),
    notes: formData.get('notes') as string,
    createdAt: Date.now(),
  };

  // Basic validation
  if (!newContribution.date || !newContribution.member || !newContribution.notes) {
    return {
        message: 'Failed to create contribution. Please fill out all fields.',
    }
  }


  let contributions: Contribution[] = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    if (fileContent) {
        contributions = JSON.parse(fileContent);
    }
  } catch (err) {
    const error = err as { code?: string };
    if (error.code !== 'ENOENT') {
        console.error(err);
        return { message: 'Failed to read data file.' };
    }
  }

  contributions.push(newContribution);

  try {
    await fs.writeFile(dataFilePath, JSON.stringify(contributions, null, 2));
  } catch (error) {
    console.error(error);
    return { message: 'Failed to write data file.' };
  }

  revalidatePath('/');
  redirect('/');
}