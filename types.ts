
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface TechnicalFeature {
  id: string;
  name: string;
  category: string;
  image: string;
  specs: string;
  description: string;
}

// Added missing Artist interface to fix the import error in components/ArtistCard.tsx
export interface Artist {
  id: string;
  name: string;
  image: string;
  day: string;
  genre: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  CRITERIA = 'criteria',
  DIFFERENTIAL = 'differential',
  SUPPORT = 'support',
}
