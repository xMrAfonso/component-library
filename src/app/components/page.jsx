"use client"
import React, { useState } from 'react';

// Button imports
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import DangerButton from '@/components/buttons/DangerButton';
import GhostButton from '@/components/buttons/GhostButton';
import IconButton from '@/components/buttons/IconButton';
import LinkButton from '@/components/buttons/LinkButton';
import LoadingButton from '@/components/buttons/LoadingButton';
import OutlineButton from '@/components/buttons/OutlineButton';
import PillButton from '@/components/buttons/PillButton';
import RoundButton from '@/components/buttons/RoundButton';
import SuccessButton from '@/components/buttons/SuccessButton';
import ThemeToggleButton from '@/components/buttons/ThemeToggleButton';

// Card imports
import DataCard from '@/components/cards/DataCard';
import FeatureCard from '@/components/cards/FeatureCard';
import ImageCard from '@/components/cards/ImageCard';
import PricingCard from '@/components/cards/PricingCard';
import ProfileCard from '@/components/cards/ProfileCard';
import SimpleCard from '@/components/cards/SimpleCard';
import StatsCard from '@/components/cards/StatsCard';
import TestimonialCard from '@/components/cards/TestimonialCard';

import { Heart, Star, Download, Search, Settings, User } from 'lucide-react';

export default function ComponentsPage() {
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Component Library</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our collection of beautiful, reusable React components. Each component is designed 
          for modern web applications with accessibility and performance in mind.
        </p>
      </section>

      {/* Buttons Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Buttons</h2>
        
        {/* Primary Buttons */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Buttons</h3>
          <div className="flex flex-wrap gap-4 p-6 bg-gray-50 rounded-lg">
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
            <SuccessButton>Success Button</SuccessButton>
            <DangerButton>Danger Button</DangerButton>
            <GhostButton>Ghost Button</GhostButton>
            <OutlineButton>Outline Button</OutlineButton>
          </div>
        </div>

        {/* Specialized Buttons */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Specialized Buttons</h3>
          <div className="flex flex-wrap gap-4 p-6 bg-gray-50 rounded-lg">
            <PillButton>Pill Button</PillButton>
            <RoundButton>R</RoundButton>
            <LoadingButton isLoading={loading} onClick={handleLoadingDemo}>
              Loading Button
            </LoadingButton>
            <IconButton>
              <Heart className="w-4 h-4" />
            </IconButton>
            <LinkButton href="#components">Link Button</LinkButton>
            <ThemeToggleButton />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SimpleCard 
            title="Simple Card" 
            description="A clean and minimal card design perfect for displaying basic content and actions."
          />
          
          <FeatureCard 
            title="Feature Card"
            description="Highlight key features and benefits with this attractive card design."
          />
          
          <DataCard 
            title="Analytics Overview"
            value="12,459"
            icon="📊"
            trend="up"
          />
          
          <StatsCard 
            title="Downloads"
            value="1,234"
          />
          
          <ProfileCard 
            name="Sarah Johnson"
            role="UI/UX Designer"
          />
          
          <PricingCard 
            title="Pro Plan"
            price="$19"
          />
          
          <ImageCard 
            title="Beautiful Landscapes"
            description="Explore stunning natural scenery from around the world."
          />
          
          <TestimonialCard 
            quote="This component library has significantly improved our development workflow. The quality and attention to detail is outstanding!"
            author="Alex Chen"
            role="Frontend Developer"
          />
        </div>
      </section>

      {/* Code Examples Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Examples</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`// Import components
import { PrimaryButton, SimpleCard } from '@/components'

// Use in your JSX
<PrimaryButton onClick={handleClick}>
  Click me
</PrimaryButton>

<SimpleCard 
  title="Card Title"
  description="Card description here"
/>`}
          </pre>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          To use these components in your project, simply copy the component files into your project 
          and import them as needed. Each component is self-contained and follows React best practices.
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded">
          <code className="text-sm">
            npm install @your-org/component-library
          </code>
        </div>
      </section>
    </div>
  );
}