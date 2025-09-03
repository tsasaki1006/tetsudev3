'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { Contribution } from '@/types';

const dataFilePath = path.join(process.cwd(), 'src/data/contributions.json');

export async function addContribution(formData: FormData) {
  const newContribution = {
    id: crypto.randomUUID(),
    date: formData.get('date') as string,
    member: formData.get('member') as string,
    appointments: Number(formData.get('appointments')),
    qualitative: Number(formData.get('qualitative')),
    notes: formData.get('notes') as string,
    createdAt: Date.now(),
  };

  let contributions: Contribution[] = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    // Handle case where file is empty
    if (fileContent) {
        contributions = JSON.parse(fileContent);
    }
  } catch (error) {
    // If the file doesn't exist, we'll create it with the new contribution
    if (error.code !== 'ENOENT') {
      console.error(error);
      // Depending on the error, you might want to return an error state
      return;
    }
  }

  contributions.push(newContribution);

  try {
    await fs.writeFile(dataFilePath, JSON.stringify(contributions, null, 2));
  } catch (error) {
    console.error(error);
    // Handle write error
    return;
  }

  revalidatePath('/');
  redirect('/');
}
