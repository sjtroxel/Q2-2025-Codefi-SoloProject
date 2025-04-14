export interface Instrument {
  id: number;
  type: string;
  family: 'brass' | 'woodwind' | 'percussion' | 'string' | 'keyboard';
  brand: string;
  serialNumber: string;
  condition: 'new' | 'excellent' | 'good' | 'fair' | 'very poor';
  notes?: string
}
