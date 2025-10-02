'use client';

import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import PrimaryButton from '../components/buttons/PrimaryButton'
import SecondaryButton from '../components/buttons/SecondaryButton'
import GhostButton from '../components/buttons/GhostButton'
import IconButton from '../components/buttons/IconButton'
import PillButton from '../components/buttons/PillButton'
import SimpleCard from '../components/cards/SimpleCard'
import ImageCard from '../components/cards/ImageCard'
import FeatureCard from '../components/cards/FeatureCard'
import ProfileCard from '../components/cards/ProfileCard'
import PricingCard from '../components/cards/PricingCard'
import DataCard from '@/components/cards/DataCard'
import OutlineButton from '@/components/buttons/OutlineButton'
import DangerButton from '@/components/buttons/DangerButton'
import LinkButton from '@/components/buttons/LinkButton'
import LoadingButton from '@/components/buttons/LoadingButton'
import RoundButton from '@/components/buttons/RoundButton'
import SuccessButton from '@/components/buttons/SuccessButton'

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // All components with search data
  const allComponents = {
    buttons: [
      { name: 'Primary Button', component: <PrimaryButton>Primary</PrimaryButton>, keywords: ['primary', 'main', 'action'] },
      { name: 'Secondary Button', component: <SecondaryButton>Secondary</SecondaryButton>, keywords: ['secondary', 'alternate'] },
      { name: 'Ghost Button', component: <GhostButton>Ghost</GhostButton>, keywords: ['ghost', 'transparent', 'subtle'] },
      { name: 'Outline Button', component: <OutlineButton>Outline</OutlineButton>, keywords: ['outline', 'border', 'stroke'] },
      { name: 'Danger Button', component: <DangerButton>Danger</DangerButton>, keywords: ['danger', 'error', 'delete', 'warning'] },
      { name: 'Link Button', component: <LinkButton>Link</LinkButton>, keywords: ['link', 'text', 'minimal'] },
      { name: 'Loading Button', component: <LoadingButton>Loading</LoadingButton>, keywords: ['loading', 'spinner', 'progress'] },
      { name: 'Round Button', component: <RoundButton>Rounded</RoundButton>, keywords: ['round', 'rounded', 'circular'] },
      { name: 'Success Button', component: <SuccessButton>Success</SuccessButton>, keywords: ['success', 'confirm', 'done'] },
      { name: 'Icon Button', component: <IconButton aria-label="star">★</IconButton>, keywords: ['icon', 'star', 'symbol'] },
      { name: 'Pill Button', component: <PillButton>Subscribe</PillButton>, keywords: ['pill', 'subscribe', 'rounded'] }
    ],
    cards: [
      { name: 'Simple Card', component: <SimpleCard title="Simple Card" description="A minimal card with actions." />, keywords: ['simple', 'basic', 'minimal'] },
      { name: 'Image Card', component: <ImageCard title="Image Card" description="Card with SVG image." />, keywords: ['image', 'picture', 'visual'] },
      { name: 'Feature Card', component: <FeatureCard title="Feature Card" description="Highlight features and benefits." />, keywords: ['feature', 'highlight', 'benefit'] },
      { name: 'Profile Card', component: <ProfileCard name="Alex Johnson" role="Product Designer" />, keywords: ['profile', 'user', 'person', 'avatar'] },
      { name: 'Pricing Card', component: <PricingCard plan="Pro" price="$9/mo" features={["10 projects", "Priority support", "Unlimited users"]} />, keywords: ['pricing', 'plan', 'subscription', 'price'] },
      { name: 'Data Card', component: <DataCard title="Active Projects" value="27" icon="📂" trend={8} />, keywords: ['data', 'stats', 'analytics', 'metrics'] }
    ]
  };

  // Filter logic
  const getFilteredComponents = () => {
    let components = {};

    // Apply type filter
    if (filterType === 'all') {
      components = allComponents;
    } else {
      components = { [filterType]: allComponents[filterType] };
    }

    // Apply search filter
    if (searchTerm) {
      const filtered = {};
      Object.keys(components).forEach(type => {
        const matchedComponents = components[type].filter(comp =>
          comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comp.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        if (matchedComponents.length > 0) {
          filtered[type] = matchedComponents;
        }
      });
      return filtered;
    }

    return components;
  };

  const filteredComponents = getFilteredComponents();
  const totalResults = Object.values(filteredComponents).reduce((total, components) => total + components.length, 0);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Component Library</h1>

        {/* Search Bar - Inline */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search components (buttons, cards, primary, etc.)"
              className="w-full pl-9 pr-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="sm:w-40">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-sm"
            >
              <option value="all">All Components</option>
              <option value="buttons">Buttons</option>
              <option value="cards">Cards</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Info */}
      {(searchTerm || filterType !== 'all') && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800">
            Found <span className="font-semibold">{totalResults}</span> component{totalResults !== 1 ? 's' : ''}
            {searchTerm && ` matching "${searchTerm}"`}
            {filterType !== 'all' && ` in ${filterType}`}
          </p>
        </div>
      )}

      {/* No Results */}
      {totalResults === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No components found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Buttons Section */}
      {filteredComponents.buttons && (
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Buttons ({filteredComponents.buttons.length})
          </h2>
          <div className="flex gap-4 flex-wrap">
            {filteredComponents.buttons.map((item, index) => (
              <div key={index}>
                {item.component}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cards Section */}
      {filteredComponents.cards && (
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Cards ({filteredComponents.cards.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.cards.map((item, index) => (
              <div key={index}>
                {item.component}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}