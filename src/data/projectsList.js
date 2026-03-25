import TraderDashboard from '../pages/projects/TraderDashboard';
import TaderDashboard from '../pages/projects/TaderDashboard';
import CognitiveLoad from '../pages/projects/CognitiveLoad';
import ElearningPlatform from '../pages/projects/ElearningPlatform';
import FintechOnboarding from '../pages/projects/FintechOnboarding';

export const projectsList = [
  {
    id: 'trader-dashboard',
    title: 'Trader Dashboard Redesign',
    category: 'Corporate (Upstox)',
    component: TraderDashboard
  },
  {
    id: 'tader-dashboard',
    title: 'Tader Dashboard Redesign',
    category: 'Corporate (Upstox)',
    component: TaderDashboard
  },
  {
    id: 'cognitive-load',
    title: 'Cognitive Load in Interfaces',
    category: 'Current PhD Research',
    component: CognitiveLoad
  },
  {
    id: 'e-learning-platform',
    title: 'Accessible e-Learning Platform',
    category: 'College (IIT Bombay)',
    component: ElearningPlatform
  },
  {
    id: 'fintech-onboarding',
    title: 'Fintech Onboarding Flow',
    category: 'Corporate (Upstox)',
    component: FintechOnboarding
  }
];
