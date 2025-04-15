export interface Instrument {
  id: number;
  type: string;
  family: 'brass' | 'woodwind' | 'percussion' | 'stringInstrument' | 'keyboard';
  brand: string;
  serialNumber: string;
  condition: 'new' | 'excellent' | 'good' | 'fair' | 'very poor';
  notes?: string
}
