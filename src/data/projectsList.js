import TraderDashboard from '../pages/projects/TraderDashboard';
import TaderDashboard from '../pages/projects/TaderDashboard';
import CognitiveLoad from '../pages/projects/CognitiveLoad';
import ElearningPlatform from '../pages/projects/ElearningPlatform';
import FintechOnboarding from '../pages/projects/FintechOnboarding';

import traderDashboardImg from '../assets/images/projects/trader-dashboard.png';
import taderDashboardImg from '../assets/images/projects/tader-dashboard.png';
import fintechOnboardingImg from '../assets/images/projects/fintech-onboarding.png';
import cognitiveLoadImg from '../assets/images/projects/cognitive-load.png';
import elearningPlatformImg from '../assets/images/projects/elearning-platform.png';

export const projectsList = [
  {
    id: 'trader-dashboard',
    title: 'Trader Dashboard Redesign',
    category: 'Corporate (Upstox)',
    group: '✨ Corporate Strategy & Design',
    year: '2024',
    description: 'B2B Fintech Application Redesign',
    image: traderDashboardImg,
    component: TraderDashboard
  },
  {
    id: 'tader-dashboard',
    title: 'Tader Dashboard Redesign',
    category: 'Corporate (Upstox)',
    group: '✨ Corporate Strategy & Design',
    year: '2024',
    description: 'Corporate Financial Strategy',
    image: taderDashboardImg,
    component: TaderDashboard
  },
  {
    id: 'fintech-onboarding',
    title: 'Fintech Onboarding Flow',
    category: 'Corporate (Upstox)',
    group: '✨ Corporate Strategy & Design',
    year: '2023',
    description: 'Frictionless User Onboarding',
    image: fintechOnboardingImg,
    component: FintechOnboarding
  },
  {
    id: 'cognitive-load',
    title: 'Cognitive Load in Interfaces',
    category: 'Current PhD Research',
    group: '🔬 Research & Academia',
    year: '2025',
    description: 'HCI & Cognitive Scientific Analysis',
    image: cognitiveLoadImg,
    component: CognitiveLoad
  },
  {
    id: 'e-learning-platform',
    title: 'Accessible e-Learning Platform',
    category: 'College (IIT Bombay)',
    group: '🔬 Research & Academia',
    year: '2023',
    description: 'Accessible Learning Experience Design',
    image: elearningPlatformImg,
    component: ElearningPlatform
  }
];
