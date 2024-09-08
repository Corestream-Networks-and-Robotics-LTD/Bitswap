import shield from '../../../public/shield.svg'
import Eth from '../../../public/eth.svg'
import Medal from '../../../public/medal.svg'

export type Feature = {
  icon: string;
  title: string;
  description: string;
  glowColor: string;
}

export const features: Feature[] = [
  {
    icon: Eth, 
    title: 'Access Token Creation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.',
    glowColor: '#FBBF24', 
  },
  {
    icon: Medal, 
    title: 'Ownership Token Control',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.',
    glowColor: '#10B981', 
  },
  {
    icon: shield, 
    title: 'Assign OPFS Metodoto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.',
    glowColor: '#EF4444',
  },
];
