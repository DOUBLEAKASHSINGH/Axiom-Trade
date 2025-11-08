# Axiom Trade Platform

A next-generation trading platform built with Next.js, featuring a modern dark theme UI and real-time trading capabilities.

## Features

### Core Trading Features
- **Spot Trading Interface**: Clean and intuitive spot trading interface
- **Perpetual Trading**: Support for perpetual futures trading (in development)
- **Token Table**: Real-time token price and trading information with dynamic loading states
- **Balance Overview**: Real-time balance tracking and PNL visualization
- **Chart Integration**: Interactive price charts using Recharts

### UI Components

#### Atomic Design Structure
- **Atoms**
  - `Button.tsx`: Reusable button component with multiple variants
  - `Skeleton.tsx`: Loading state placeholder component

- **Molecules**
  - `Header.tsx`: Application header with navigation
  - `TokenTable.tsx`: Comprehensive token information display

- **Organisms**
  - `NavBar.tsx`: Main navigation bar with authentication controls
  - `TokenTable.tsx`: Complete trading interface with token information

#### UI Library Components
- **Radix UI Integration**
  - Popover: Enhanced dropdowns and contextual interfaces
  - Tooltip: Informative hover states
  - Slot: Compound component composition

### Technical Stack

- **Framework**: Next.js 16.0.1
- **State Management**: 
  - Redux Toolkit
  - React Query for API state
- **Styling**: 
  - TailwindCSS with custom configuration
  - CSS Modules for component-specific styles
- **UI Libraries**:
  - Radix UI for accessible components
  - Recharts for data visualization
- **Development Tools**:
  - TypeScript for type safety
  - ESLint & Prettier for code quality
  - Jest & Testing Library for unit testing
  - Playwright for E2E testing

## Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Testing**
   ```bash
   # Unit Tests
   npm run test
   
   # E2E Tests
   npm run test:e2e
   ```

4. **Build**
   ```bash
   npm run build
   ```

## Project Structure

```
axiom-trade/
├── app/                  # Next.js 13+ app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Composite components
│   ├── organisms/      # Complex UI sections
│   └── ui/             # Shared UI components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
├── store/             # Redux store configuration
└── types/             # TypeScript type definitions
```

## Component Documentation

### TokenTable
The main trading interface component that displays:
- Token pairs and current prices
- Real-time price updates
- Trading volume information
- Interactive actions for each token

### NavBar
Main navigation component featuring:
- Brand logo and name
- Authentication controls (Login/Sign up)
- Responsive design for mobile views

### Charts
Implemented using Recharts library:
- Price history visualization
- PNL tracking
- Volume indicators

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.
