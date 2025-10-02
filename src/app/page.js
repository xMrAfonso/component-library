"use client";
import React from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'
import SecondaryButton from '../components/buttons/SecondaryButton'
import GhostButton from '../components/buttons/GhostButton'
import IconButton from '../components/buttons/IconButton'
import SimpleCard from '../components/cards/SimpleCard'
import ImageCard from '../components/cards/ImageCard'
import FeatureCard from '../components/cards/FeatureCard'
import PricingCard from '../components/cards/PricingCard'
import DataCard from '@/components/cards/DataCard'
import OutlineButton from '@/components/buttons/OutlineButton'
import DangerButton from '@/components/buttons/DangerButton'
import SuccessButton from '@/components/buttons/SuccessButton'

// Input Components
import TextInput from '../components/inputs/TextInput'
import Select from '../components/inputs/Select'
import Checkbox from '../components/inputs/Checkbox'

// Navigation Components
import Tabs from '../components/navigation/Tabs'
import Breadcrumb from '../components/navigation/Breadcrumb'
import Pagination from '../components/navigation/Pagination'



export default function Page() {


  // Input component states
  const [inputValue, setInputValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  // Navigation component states
  const [activeTab, setActiveTab] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);



  // Sample data
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const tabsData = [
    {
      label: 'Dashboard',
      content: <div className="p-4">Dashboard content goes here...</div>,
      badge: '3'
    },
    {
      label: 'Analytics',
      content: <div className="p-4">Analytics content goes here...</div>
    },
    {
      label: 'Settings',
      content: <div className="p-4">Settings content goes here...</div>
    }
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Breadcrumb' }
  ];
  return (
    <div className="space-y-12">
      <section id="buttons" className='mt-12'>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <PrimaryButton>Primary</PrimaryButton>
          <SecondaryButton>Secondary</SecondaryButton>
          <GhostButton>Ghost</GhostButton>
          <OutlineButton>Outline</OutlineButton>
          <DangerButton>Danger</DangerButton>
          <SuccessButton>Success</SuccessButton>
          <IconButton aria-label="star">★</IconButton>
        </div>
      </section>

      <section id="cards">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SimpleCard title="Simple Card" description="A minimal card with actions." />
          <ImageCard title="Image Card" description="Card with SVG image." />
          <FeatureCard title="Feature Card" description="Highlight features and benefits." />
          <PricingCard plan="Pro" price="$9/mo" features={["10 projects", "Priority support", "Unlimited users"]} />
          <DataCard title="Active Projects" value="27" icon="📂" trend={8} />
        </div>
      </section>

      <section id="inputs">
        <h2 className="text-2xl font-semibold mb-4">Input Components</h2>
        <div className="max-w-md space-y-4">
          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            helperText="We'll never share your email"
            required
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            error="Password must be at least 8 characters"
          />
          <Select
            label="Choose an option"
            options={selectOptions}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            required
          />
          <Checkbox
            label="Terms and Conditions"
            description="I agree to the terms and conditions"
            checked={checkboxValue}
            onChange={(e) => setCheckboxValue(e.target.checked)}
          />
          <Checkbox
            label="Disabled Option"
            description="This option is disabled"
            disabled
          />
        </div>
      </section>

      <section id="navigation">
        <h2 className="text-2xl font-semibold mb-4">Navigation Components</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Breadcrumb</h3>
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Tabs</h3>
            <Tabs
              tabs={tabsData}
              defaultTab={activeTab}
              onTabChange={(index) => setActiveTab(index)}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Pagination</h3>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={(page) => setCurrentPage(page)}
              maxVisiblePages={5}
            />
          </div>
        </div>
      </section>


    </div>
  )
}
