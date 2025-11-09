# TODO: Build Pixel-Perfect Replica of Axiom Trade Token Discovery Table

- [x] Update Token and Perpetual types to include marketCap, volume24h, transactions, holders
- [x] Update /api/tokens and /api/perpetuals to return expanded data
- [x] Refactor TokenTable.tsx: Change tabs to "New Pairs", "Final Stretch", "Migrated"; add columns Token, Market Cap, Liquidity, 24h Vol, Txns, Holders, Action; add sorting, hover effects, row click modal
- [x] Create TokenPopover component (Radix Popover) for token details
- [x] Create Tooltip component (Radix Tooltip) for icons/cells
- [x] Create TokenModal component (Radix Dialog) for row details with tabs
- [x] Add useWebSocketMock hook for real-time updates with animations
- [x] Wrap table in ErrorBoundary
- [x] Update Redux tableSlice for sorting, filters, modals
- [x] Add API routes for login (/api/auth/login) and signup (/api/auth/signup)
- [ ] Make responsive: Grid on desktop, stacked cards on mobile
- [ ] Add progressive loading for pagination if needed
- [ ] Test responsiveness, interactions, performance
- [ ] Add video demo, README snapshots
- [ ] Deploy to Vercel, ensure Lighthouse score ≥90
