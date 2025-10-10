# API Reference

This document provides comprehensive usage examples for all components in the Component Library. All examples are copy-paste ready and designed for Next.js projects.

## Table of Contents

- [Buttons](#buttons)
  - [Primary Button](#primary-button)
  - [Secondary Button](#secondary-button)
  - [Danger Button](#danger-button)
  - [Loading Button](#loading-button)
  - [Icon Button](#icon-button)
  - [Ghost Button](#ghost-button)
  - [Outline Button](#outline-button)
  - [Pill Button](#pill-button)
  - [Round Button](#round-button)
  - [Success Button](#success-button)
  - [Rainbow Button](#rainbow-button)
  - [Link Button](#link-button)
  - [Theme Toggle Button](#theme-toggle-button)
- [Cards](#cards)
  - [Simple Card](#simple-card)
  - [Image Card](#image-card)
  - [Feature Card](#feature-card)
  - [Pricing Card](#pricing-card)
  - [Product Card](#product-card)
  - [Profile Card](#profile-card)
  - [User Card](#user-card)
  - [Stats Card](#stats-card)
  - [Data Card](#data-card)
  - [Alert Card](#alert-card)
  - [Testimonial Card](#testimonial-card)

---

## Buttons

### Primary Button

A standard primary button with blue styling and hover effects.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props (onClick, disabled, etc.)

**Usage:**

```jsx
import PrimaryButton from "@/app/components/buttons/PrimaryButton";

export default function MyComponent() {
  const handleClick = () => {
    console.log("Primary button clicked!");
  };

  return (
    <div>
      <PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>

      <PrimaryButton disabled>Disabled Button</PrimaryButton>
    </div>
  );
}
```

### Secondary Button

A secondary button with subtle styling and border.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import SecondaryButton from "@/app/components/buttons/SecondaryButton";

export default function MyComponent() {
  return (
    <div className="space-x-4">
      <SecondaryButton onClick={() => alert("Secondary clicked")}>
        Secondary Action
      </SecondaryButton>

      <SecondaryButton type="submit">Submit Form</SecondaryButton>
    </div>
  );
}
```

### Danger Button

A red-styled button for destructive actions.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import DangerButton from "@/app/components/buttons/DangerButton";

export default function MyComponent() {
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this item?")) {
      // Delete logic here
      console.log("Item deleted");
    }
  };

  return <DangerButton onClick={handleDelete}>Delete Item</DangerButton>;
}
```

### Loading Button

A button with loading state and spinner animation.

**Props:**

- `children` (ReactNode): Button content
- `isLoading` (boolean): Whether to show loading state (default: true)
- `...props`: Any standard button props

**Usage:**

```jsx
import { useState } from "react";
import LoadingButton from "@/app/components/buttons/LoadingButton";

export default function MyComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted successfully");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <LoadingButton isLoading={isSubmitting} onClick={handleSubmit}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </LoadingButton>

      {/* Always loading example */}
      <LoadingButton>Processing...</LoadingButton>
    </div>
  );
}
```

### Icon Button

A minimal button designed for icons with hover effects.

**Props:**

- `children` (ReactNode): Icon or content
- `...props`: Any standard button props

**Usage:**

```jsx
import IconButton from "@/app/components/buttons/IconButton";

export default function MyComponent() {
  return (
    <div className="flex space-x-2">
      <IconButton onClick={() => console.log("Edit clicked")}>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </IconButton>

      <IconButton onClick={() => console.log("Delete clicked")}>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </IconButton>
    </div>
  );
}
```

### Ghost Button

A transparent button with minimal styling.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import GhostButton from "@/app/components/buttons/GhostButton";

export default function MyComponent() {
  return (
    <div className="space-x-4">
      <GhostButton onClick={() => console.log("Ghost clicked")}>
        Ghost Button
      </GhostButton>

      <GhostButton className="text-blue-600">Custom Styled</GhostButton>
    </div>
  );
}
```

### Outline Button

A button with outlined border styling.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import OutlineButton from "@/app/components/buttons/OutlineButton";

export default function MyComponent() {
  return (
    <div className="space-y-4">
      <OutlineButton onClick={() => console.log("Outline clicked")}>
        Outline Button
      </OutlineButton>

      <OutlineButton type="button" disabled>
        Disabled Outline
      </OutlineButton>
    </div>
  );
}
```

### Pill Button

A button with rounded pill-like appearance.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import PillButton from "@/app/components/buttons/PillButton";

export default function MyComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <PillButton onClick={() => console.log("Tag clicked")}>#react</PillButton>

      <PillButton onClick={() => console.log("Tag clicked")}>
        #nextjs
      </PillButton>

      <PillButton onClick={() => console.log("Tag clicked")}>
        #tailwind
      </PillButton>
    </div>
  );
}
```

### Round Button

A circular button, perfect for floating action buttons.

**Props:**

- `children` (ReactNode): Button content (usually an icon)
- `...props`: Any standard button props

**Usage:**

```jsx
import RoundButton from "@/app/components/buttons/RoundButton";

export default function MyComponent() {
  return (
    <div className="fixed bottom-4 right-4">
      <RoundButton onClick={() => console.log("FAB clicked")}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </RoundButton>
    </div>
  );
}
```

### Success Button

A green-styled button for success actions.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import SuccessButton from "@/app/components/buttons/SuccessButton";

export default function MyComponent() {
  const handleSuccess = () => {
    console.log("Success action triggered");
    // Show success message
  };

  return (
    <div className="space-y-4">
      <SuccessButton onClick={handleSuccess}>Save Changes</SuccessButton>

      <SuccessButton type="submit">Complete Order</SuccessButton>
    </div>
  );
}
```

### Rainbow Button

A button with rainbow gradient styling.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import RainbowButton from "@/app/components/buttons/RainbowButton";

export default function MyComponent() {
  return (
    <RainbowButton onClick={() => console.log("Rainbow magic!")}>
      ✨ Special Action
    </RainbowButton>
  );
}
```

### Link Button

A button styled to look like a link.

**Props:**

- `children` (ReactNode): Button content
- `...props`: Any standard button props

**Usage:**

```jsx
import LinkButton from "@/app/components/buttons/LinkButton";

export default function MyComponent() {
  return (
    <div className="space-x-4">
      <LinkButton onClick={() => console.log("Link clicked")}>
        Learn More
      </LinkButton>

      <LinkButton className="text-red-600">Reset Password</LinkButton>
    </div>
  );
}
```

### Theme Toggle Button

A button for toggling between light and dark themes.

**Props:**

- Standard button props

**Usage:**

```jsx
import ThemeToggleButton from "@/app/components/buttons/ThemeToggleButton";

export default function MyComponent() {
  return (
    <div className="flex justify-end p-4">
      <ThemeToggleButton />
    </div>
  );
}
```

---

## Cards

### Simple Card

A basic card with title, description, and action buttons.

**Props:**

- `title` (string): Card title
- `description` (string): Card description

**Usage:**

```jsx
import SimpleCard from "@/app/components/cards/SimpleCard";

export default function MyComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SimpleCard
        title="Getting Started"
        description="Learn the basics of our component library and how to integrate it into your Next.js project."
      />

      <SimpleCard
        title="Advanced Usage"
        description="Discover advanced patterns and customization options for complex use cases."
      />

      <SimpleCard
        title="Best Practices"
        description="Follow our recommended guidelines for optimal performance and maintainability."
      />
    </div>
  );
}
```

### Image Card

A card with an image placeholder and content.

**Props:**

- `title` (string): Card title
- `description` (string): Card description

**Usage:**

```jsx
import ImageCard from "@/app/components/cards/ImageCard";

export default function MyComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ImageCard
        title="Product Showcase"
        description="Beautiful product displays with hover effects and smooth animations."
      />

      <ImageCard
        title="Portfolio Item"
        description="Perfect for showcasing your work and projects with visual appeal."
      />
    </div>
  );
}
```

### Feature Card

A card highlighting features with checkmarks.

**Props:**

- `title` (string): Feature title
- `description` (string): Feature description

**Usage:**

```jsx
import FeatureCard from "@/app/components/cards/FeatureCard";

export default function MyComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        title="Lightning Fast"
        description="Optimized components for maximum performance and minimal bundle size."
      />

      <FeatureCard
        title="Fully Accessible"
        description="Built with accessibility in mind, following WCAG guidelines and best practices."
      />

      <FeatureCard
        title="Dark Mode Ready"
        description="Seamless dark mode support with automatic theme switching capabilities."
      />
    </div>
  );
}
```

### Pricing Card

A card for displaying pricing plans and features.

**Props:**

- `plan` (string): Plan name
- `price` (string): Price display
- `features` (array): Array of feature strings

**Usage:**

```jsx
import PricingCard from "@/app/components/cards/PricingCard";

export default function MyComponent() {
  const plans = [
    {
      plan: "Starter",
      price: "$9/month",
      features: [
        "Up to 10 projects",
        "Basic support",
        "1GB storage",
        "Standard templates",
      ],
    },
    {
      plan: "Pro",
      price: "$29/month",
      features: [
        "Unlimited projects",
        "Priority support",
        "10GB storage",
        "Premium templates",
        "Advanced analytics",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Unlimited storage",
        "Dedicated support",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <PricingCard
          key={index}
          plan={plan.plan}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
}
```

### Product Card

A card for displaying products with image, name, and price.

**Props:**

- `name` (string): Product name
- `price` (string): Product price
- `image` (string): Product image URL

**Usage:**

```jsx
import ProductCard from "@/app/components/cards/ProductCard";

export default function MyComponent() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "$199.99",
      image: "/images/headphones.jpg",
    },
    {
      name: "Smart Watch",
      price: "$299.99",
      image: "/images/smartwatch.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
```

### Profile Card

A card for displaying user profiles with follow button.

**Props:**

- `name` (string): User's name
- `role` (string): User's role or title

**Usage:**

```jsx
import ProfileCard from "@/app/components/cards/ProfileCard";

export default function MyComponent() {
  const users = [
    { name: "Sarah Chen", role: "Frontend Developer" },
    { name: "Alex Johnson", role: "UI/UX Designer" },
    { name: "Mike Rodriguez", role: "Backend Engineer" },
  ];

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {users.map((user, index) => (
        <ProfileCard key={index} name={user.name} role={user.role} />
      ))}
    </div>
  );
}
```

### User Card

A modern glassmorphism-style card for displaying user information.

**Props:**

- `avatar` (string): User avatar URL (default: random avatar)
- `name` (string): User's name (default: "John Doe")
- `email` (string): User's email (default: "johndoe@example.com")
- `role` (string): User's role (default: "Software Engineer")
- `onClick` (function): Click handler

**Usage:**

```jsx
import UserCard from "@/app/components/cards/UserCard";

export default function MyComponent() {
  const handleUserClick = (user) => {
    console.log("User clicked:", user);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UserCard
        avatar="https://i.pravatar.cc/150?img=2"
        name="Emily Davis"
        email="emily.davis@example.com"
        role="Product Manager"
        onClick={() => handleUserClick("Emily")}
      />

      <UserCard
        avatar="https://i.pravatar.cc/150?img=3"
        name="David Wilson"
        email="david.wilson@example.com"
        role="Data Scientist"
        onClick={() => handleUserClick("David")}
      />

      {/* Using default values */}
      <UserCard onClick={() => handleUserClick("Default")} />
    </div>
  );
}
```

### Stats Card

A card for displaying statistics with icon and trend indicators.

**Props:**

- `title` (string): Stat title/label
- `value` (string/number): The main statistic value
- `icon` (ReactNode): Icon or emoji
- `trend` (number): Percentage change (optional)

**Usage:**

```jsx
import StatsCard from "@/app/components/cards/StatsCard";

export default function MyComponent() {
  const stats = [
    {
      title: "Total Users",
      value: "12,345",
      icon: "👥",
      trend: 12.5,
    },
    {
      title: "Revenue",
      value: "$98,750",
      icon: "💰",
      trend: -2.3,
    },
    {
      title: "Orders",
      value: "856",
      icon: "📦",
      trend: 8.7,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: "📈",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
}
```

### Data Card

A themed card for displaying data metrics with trend indicators.

**Props:**

- `title` (string): Data title/label
- `value` (string/number): The main data value
- `icon` (string): Icon or emoji (default: "📊")
- `trend` (number): Percentage change (optional)

**Usage:**

```jsx
import DataCard from "@/app/components/cards/DataCard";

export default function MyComponent() {
  const metrics = [
    {
      title: "Active Users",
      value: "2,847",
      icon: "👤",
      trend: 15.3,
    },
    {
      title: "Page Views",
      value: "94.2K",
      icon: "👁️",
      trend: -5.2,
    },
    {
      title: "Session Duration",
      value: "4m 32s",
      icon: "⏱️",
      trend: 8.1,
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      icon: "📊",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <DataCard
          key={index}
          title={metric.title}
          value={metric.value}
          icon={metric.icon}
          trend={metric.trend}
        />
      ))}
    </div>
  );
}
```

### Alert Card

A card for displaying different types of alerts and notifications.

**Props:**

- `title` (string): Alert title
- `description` (string): Alert description
- `type` (string): Alert type - "info", "warning", "error", or "success" (default: "info")

**Usage:**

```jsx
import AlertCard from "@/app/components/cards/AlertCard";

export default function MyComponent() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <AlertCard
        type="success"
        title="Success!"
        description="Your changes have been saved successfully."
      />

      <AlertCard
        type="warning"
        title="Warning"
        description="Please review your settings before proceeding."
      />

      <AlertCard
        type="error"
        title="Error"
        description="Something went wrong. Please try again."
      />

      <AlertCard
        type="info"
        title="Information"
        description="Here's some helpful information for you."
      />

      {/* Default type (info) */}
      <AlertCard
        title="Default Alert"
        description="This uses the default info styling."
      />
    </div>
  );
}
```

### Testimonial Card

A card for displaying customer testimonials and reviews.

**Props:**

- `name` (string): Customer name
- `role` (string): Customer role/title
- `quote` (string): Testimonial quote

**Usage:**

```jsx
import TestimonialCard from "@/app/components/cards/TestimonialCard";

export default function MyComponent() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      quote:
        "This component library has significantly improved our development speed and consistency across our applications.",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer, StartupXYZ",
      quote:
        "The components are well-designed, accessible, and easy to customize. Highly recommended!",
    },
    {
      name: "Lisa Rodriguez",
      role: "Product Manager, InnovateCo",
      quote:
        "Our team loves how quickly we can prototype and build beautiful interfaces with these components.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          role={testimonial.role}
          quote={testimonial.quote}
        />
      ))}
    </div>
  );
}
```

---

## Complete Example: Component Showcase

Here's a complete example showing how to use multiple components together in a Next.js project:

```jsx
"use client";

import { useState } from "react";

// Button imports
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import SecondaryButton from "@/app/components/buttons/SecondaryButton";
import DangerButton from "@/app/components/buttons/DangerButton";
import LoadingButton from "@/app/components/buttons/LoadingButton";
import IconButton from "@/app/components/buttons/IconButton";
import SuccessButton from "@/app/components/buttons/SuccessButton";

// Card imports
import SimpleCard from "@/app/components/cards/SimpleCard";
import ImageCard from "@/app/components/cards/ImageCard";
import FeatureCard from "@/app/components/cards/FeatureCard";
import PricingCard from "@/app/components/cards/PricingCard";
import ProductCard from "@/app/components/cards/ProductCard";
import UserCard from "@/app/components/cards/UserCard";
import StatsCard from "@/app/components/cards/StatsCard";
import AlertCard from "@/app/components/cards/AlertCard";

export default function ComponentShowcase() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Action completed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Component Library Showcase
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our beautiful, accessible, and responsive components
          </p>
        </div>

        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton onClick={() => alert("Primary clicked!")}>
              Primary Button
            </PrimaryButton>
            <SecondaryButton onClick={() => alert("Secondary clicked!")}>
              Secondary Button
            </SecondaryButton>
            <SuccessButton onClick={() => alert("Success!")}>
              Success Button
            </SuccessButton>
            <DangerButton onClick={() => alert("Danger!")}>
              Danger Button
            </DangerButton>
            <LoadingButton isLoading={isLoading} onClick={handleAsyncAction}>
              {isLoading ? "Loading..." : "Async Action"}
            </LoadingButton>
            <IconButton onClick={() => alert("Icon clicked!")}>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </IconButton>
          </div>
        </section>

        {/* Alert Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Alerts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AlertCard
              type="success"
              title="Success!"
              description="Operation completed successfully."
            />
            <AlertCard
              type="warning"
              title="Warning"
              description="Please check your input."
            />
            <AlertCard
              type="error"
              title="Error"
              description="Something went wrong."
            />
            <AlertCard
              type="info"
              title="Info"
              description="Here's some helpful info."
            />
          </div>
        </section>

        {/* Stats Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Users"
              value="12,345"
              icon="👥"
              trend={12.5}
            />
            <StatsCard title="Revenue" value="$98,750" icon="💰" trend={-2.3} />
            <StatsCard title="Orders" value="856" icon="📦" trend={8.7} />
            <StatsCard title="Conversion" value="3.2%" icon="📈" />
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Lightning Fast"
              description="Optimized for performance and speed."
            />
            <FeatureCard
              title="Accessible"
              description="Built with accessibility in mind."
            />
            <FeatureCard
              title="Dark Mode"
              description="Beautiful dark mode support."
            />
          </div>
        </section>

        {/* Product Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              name="Wireless Headphones"
              price="$199.99"
              image="/api/placeholder/300/200"
            />
            <ProductCard
              name="Smart Watch"
              price="$299.99"
              image="/api/placeholder/300/200"
            />
          </div>
        </section>

        {/* User Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UserCard
              avatar="https://i.pravatar.cc/150?img=1"
              name="Sarah Johnson"
              email="sarah@example.com"
              role="Frontend Developer"
              onClick={() => alert("Sarah clicked!")}
            />
            <UserCard
              avatar="https://i.pravatar.cc/150?img=2"
              name="Mike Chen"
              email="mike@example.com"
              role="Backend Engineer"
              onClick={() => alert("Mike clicked!")}
            />
          </div>
        </section>

        {/* Pricing Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              plan="Starter"
              price="$9/month"
              features={[
                "Up to 10 projects",
                "Basic support",
                "1GB storage",
                "Standard templates",
              ]}
            />
            <PricingCard
              plan="Pro"
              price="$29/month"
              features={[
                "Unlimited projects",
                "Priority support",
                "10GB storage",
                "Premium templates",
                "Advanced analytics",
              ]}
            />
            <PricingCard
              plan="Enterprise"
              price="Custom"
              features={[
                "Everything in Pro",
                "Custom integrations",
                "Unlimited storage",
                "Dedicated support",
                "SLA guarantee",
              ]}
            />
          </div>
        </section>

        {/* Simple Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Information Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SimpleCard
              title="Getting Started"
              description="Learn how to use our component library effectively."
            />
            <ImageCard
              title="Visual Guide"
              description="See our components in action with examples."
            />
            <SimpleCard
              title="Best Practices"
              description="Follow our guidelines for optimal results."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
```

This example demonstrates:

- Proper import statements for all components
- State management with React hooks
- Event handling patterns
- Responsive grid layouts
- Component composition
- Real-world usage scenarios

---

## General Usage Notes

### Import Paths

All components use the `@/app/components/` path structure. Make sure your `jsconfig.json` or `tsconfig.json` has the proper path mapping:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Styling

- All components use Tailwind CSS for styling
- Dark mode is supported out of the box
- Components include hover effects and smooth transitions
- Focus states are included for accessibility

### Event Handling

Most interactive components accept standard React props like:

- `onClick`: Click event handler
- `onFocus`: Focus event handler
- `onBlur`: Blur event handler
- `disabled`: Disable the component
- `className`: Additional CSS classes

### Accessibility

Components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility

### Customization

You can customize components by:

- Passing additional `className` props
- Using CSS custom properties for theming
- Extending components for specific use cases
